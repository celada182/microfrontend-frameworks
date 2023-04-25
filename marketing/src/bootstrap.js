import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (element, { onNavigate }) => {
  const history = createMemoryHistory();
  history.listen(onNavigate);
  ReactDOM.render(<App history={history}/>, element);
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
