import React, { Component, useEffect } from 'react';
import styled from 'styled-components'
import LogoImg from '../../img/logo-future-eats.png'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { getProfile } from '../../actions/users'


const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  `


const StyledImg = styled.img`
  height: 65px;
  width: 126px;
`

export function InitialPage(props) {
  useEffect(
    () => {
      setTimeout(
        () => {
          const token = window.localStorage.getItem('token')
          if (token) {
            props.getProfile()
            props.goHome()
          } else {
            props.goToLogin()
          }
        },
        3000
      )
    }, []
  )

  return (
    <MainContainer>
      <StyledImg src={LogoImg} alt="Logo Future Eats" />
    </MainContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.login)),
  getProfile: () => dispatch(getProfile()),
  goHome: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(InitialPage)