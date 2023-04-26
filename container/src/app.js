import React from 'react';
import MarketingApp from "./components/marketing.app";
import AuthApp from "./components/auth.app";
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";

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
            <Switch>
              <Route path="/auth" component={AuthApp}></Route>
              <Route path="/" component={MarketingApp}></Route>
            </Switch>
          </div>
        </StylesProvider>
      </BrowserRouter>
  );
}
