import React, {lazy, Suspense, useState} from 'react';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Progress from "./components/progress";

const MarketingLazy = lazy(() => import('./components/marketing.app'));
const AuthLazy = lazy(() => import('./components/auth.app'));
const DashboardLazy = lazy(() => import('./components/dashboard.app'));

// Only for material CSS class name generator
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
            <Suspense fallback={<Progress/>}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
                </Route>
                <Route path="/dashboard" component={DashboardLazy}></Route>
                <Route path="/" component={MarketingLazy}></Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>
  );
}
