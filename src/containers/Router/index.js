import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import InitialPage from '../Initial/index'
import Login from '../Login/index'
import SignUp from '../SignUp/index'
import Address from '../Address/index'
import Home from '../Home/index'
import SelectedRestaurant from '../SelectedRestaurant/index'
import Cart from '../Cart/index'
import Profile from '../Profile/index'
import EditProfile from '../EditProfile/index'
import EditAddress from '../EditAddress/index'


export const routes = {
  root: '/',  
  login: '/login/',
  signUp: '/signup/',
  address: '/address/',
  home: '/home/' ,
  restaurants: '/restaurants/',
  cart: '/cart/',
  profile: '/profile/',
  editAddress: '/address/edit',
  editProfile: '/profile/edit/',  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={InitialPage} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.restaurants} component={SelectedRestaurant} />
        <Route exact path={routes.cart} component={Cart} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.editProfile} component={EditProfile} />
        <Route exact path={routes.editAddress} component={EditAddress} />        
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
