import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/HomeOutlined';
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import Profile from '@material-ui/icons/PersonOutline';
import styled from 'styled-components'

const MainContainer = styled.div`
    border-top: 1px solid grey;
    
`




function BottomNav(props) {
    //react hooks

    return (
        <MainContainer>
            <BottomNavigation>
                <BottomNavigationAction value="home" selected="primary" icon={<Home />}/>
                <BottomNavigationAction value="cart" selected="primary" icon={<Cart />} />
                <BottomNavigationAction value="profile" selected="primary" icon={<Profile/>} />
            </BottomNavigation>
        </MainContainer>
    )
}
    
export default BottomNav;