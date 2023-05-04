import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, element);
  return {
    onParentNavigate({pathname: nextPathname}){
      if (nextPathname !== history.location.pathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };
