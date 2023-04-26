import React, {lazy, Suspense} from 'react';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Progress from "./components/progress";

const MarketingLazy = lazy(() => import('./components/marketing.app'));
const AuthLazy = lazy(() => import('./components/auth.app'));

// Only for material CSS class name generator
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <Suspense fallback={<Progress/>}>
              <Switch>
                <Route path="/auth" component={AuthLazy}></Route>
                <Route path="/" component={MarketingLazy}></Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>
  );
}
