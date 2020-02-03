import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/core/Home';
import CartIcon from '@material-ui/core/ShoppingCart'
import ProfileIcon from '@material-ui/core/PersonOutline';
import { connect } from "react-redux";

function BottomNav() {
    //react hooks

    return (
        <div>
            <BottomNavigation>
                <BottomNavigationAction value="home" icon={<HomeIcon />} />
                <BottomNavigationAction value="cart" icon={<CartIcon />} />
                <BottomNavigationAction value="profile" icon={<ProfileIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default connect()(BottomNav)