import React, {lazy, Suspense, useState, useEffect} from 'react';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Progress from "./components/progress";
import { createBrowserHistory } from 'history';
import {Dashboard} from "@material-ui/icons";

const MarketingLazy = lazy(() => import('./components/marketing.app'));
const AuthLazy = lazy(() => import('./components/auth.app'));
const DashboardLazy = lazy(() => import('./components/dashboard.app'));

// Only for material CSS class name generator
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn){
      history.push('/dashboard');
    }
  }, [isSignedIn])

  return (
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
            <Suspense fallback={<Progress/>}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to='/'/>}
                  <DashboardLazy></DashboardLazy>
                </Route>
                <Route path="/" component={MarketingLazy}></Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </Router>
  );
}
