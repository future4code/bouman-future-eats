import React, { Component } from 'react';
import styled from 'styled-components'
import LogoImg from '../../img/logo-future-eats.png'
const MainContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  `


const StyledImg = styled.img `
  height: 65px;
  width: 126px;
`

// import { Container } from './styles';

export class Initial extends Component {
  render() {
    return (
      <MainContainer>
        <StyledImg src={LogoImg} alt ="Logo Future Eats" />
      </MainContainer>  
    );
  }
}
