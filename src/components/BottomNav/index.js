import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
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
                <BottomNavigationAction onClick={props.goToHome} value="home" selected="primary" icon={<HomeOutlinedIcon color="primary" />}/>
                <BottomNavigationAction onClick={props.goToCart} value="cart" selected="primary" icon={<ShoppingCartOutlinedIcon color="primary" />} />
                <BottomNavigationAction onClick={props.goToProfile} value="profile" selected="primary" icon={<PersonOutlineOutlinedIcon color="primary" />} />
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