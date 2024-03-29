import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

// Only for material CSS class name generator
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history, onSignIn}) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin/">
            <Signin onSignIn={onSignIn}></Signin>
          </Route>
          <Route path="/auth/signup/">
            <Signup onSignIn={onSignIn}></Signup>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}
