import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/HomeOutlined';
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import Profile from '@material-ui/icons/PersonOutline';
import { connect } from "react-redux";

function BottomNav() {
    //react hooks

    return (
        <div>
            <BottomNavigation>
                <BottomNavigationAction value="home" selected="primary" icon={<Home />}/>
                <BottomNavigationAction value="cart" selected="primary" icon={<Cart />} />
                <BottomNavigationAction value="profile" selected="primary" icon={<Profile/>} />
            </BottomNavigation>
        </div>
    )
}
    
export default connect()(BottomNav)