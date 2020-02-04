import React, { Component } from 'react';
import styled from 'styled-components'
import ClockImg from '../../img/clock.png'

const MainContainer = styled.div`
height: 118px;
background-color: #5cb646;
width: 100%;
display: flex;
img {
  width: 32px;
  height: 32px;
  margin: 24px;
}
justify-content: left;
align-items: center;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledP = styled.p `
  width: 100%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 8px;

`



function OnGoingOrder (props){
  return(
    <MainContainer>
      <img src={ClockImg}/>
      <TextDiv>
        <StyledP>Pedido em andamento</StyledP>
        <StyledP style={{color: "black"}}> Bullguer Vila Madalena</StyledP>
        <StyledP style={{color: "black" , fontWeight: "bold"}} >SUBTOTAL R$67.00</StyledP>
      </TextDiv>
    </MainContainer>
  )
}

export default OnGoingOrder