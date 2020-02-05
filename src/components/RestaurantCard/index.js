import React, { Component } from 'react';
import styled from 'styled-components'
import BurgerImg from '../../img/image.png'

const MainContainer = styled.div `
  display: flex;
  width: 100%;
  flex-direction: column;
`

const RestaurantName = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

const ContextP = styled.p`
  width: 100%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #b8b8b8;
  margin: 0px;
  margin-bottom: 8px;
`

export  class RestaurantCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <MainContainer>
        <img src={BurgerImg}></img>
        <RestaurantName>Bullguer Vila Madalena</RestaurantName>
        <ContextP>Burger</ContextP>
        <ContextP>50 - 60 min Frete R$6,00</ContextP>
        <ContextP>R.Fradique Coutinho 1136 - Vila Madalena</ContextP>
      </MainContainer>
    );
  }
}
