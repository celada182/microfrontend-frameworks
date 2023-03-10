import React from 'react';
import MarketingApp from "./components/marketing.app";
import Header from "./components/Header";

export default () => {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp/>
        </div>
      </BrowserRouter>
  );
}