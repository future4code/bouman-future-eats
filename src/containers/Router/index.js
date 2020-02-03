import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import InitialPage from '../Initial/index'
import Login from '../Login/index'
import SignUp from '../SignUp/index'
import Address from '../Address/index'
import Cart from '../Cart/index'


export const routes = {
  root: '/',
  login: '/login/',
  signUp: '/signup/',
  address: '/address/',
  cart: '/cart/'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={InitialPage} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
        <Route exact path={routes.cart} component={Cart} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
