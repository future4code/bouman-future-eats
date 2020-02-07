import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/HomeOutlined';
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import Profile from '@material-ui/icons/PersonOutline';
import styled from 'styled-components'
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router'

const MainContainer = styled.div`
    border-top: 1px solid grey;
    
`


function BottomNav(props) {
    //react hooks

    return (
        <MainContainer>
            <BottomNavigation>
                <BottomNavigationAction onClick={props.goToHome} value="home" selected="primary" icon={<Home />}/>
                <BottomNavigationAction onClick={props.goToCart} value="cart" selected="primary" icon={<Cart />} />
                <BottomNavigationAction onClick={props.goToProfile} value="profile" selected="primary" icon={<Profile/>} />
            </BottomNavigation>
        </MainContainer>
    )
}


const mapDispatchToProps = (dispatch) => ({
    goToHome: () => dispatch(push(routes.home)),
    goToCart: () => dispatch(push(routes.cart)),
    goToProfile: () => dispatch(push(routes.profile))
})

export default connect(null, mapDispatchToProps)(BottomNav);