import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history}/>, element);
  return {
    onParentNavigate({pathname: nextPathname}){
      if (nextPathname !== history.location.pathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };
