import React from 'react';
import MarketingApp from "./components/marketing.app";
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";

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
            <MarketingApp/>
          </div>
        </StylesProvider>
      </BrowserRouter>
  );
}
