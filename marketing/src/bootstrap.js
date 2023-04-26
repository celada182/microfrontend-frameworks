import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (element, { onNavigate }) => {
  const history = createMemoryHistory();
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
    mount(devRoot, {});
  }
}

export { mount };
