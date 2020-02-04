import React, { Component } from 'react';
import styled from 'styled-components'
const ContainerButton = styled.div`
  display: flex;
  width: 375px;
  height: 42px;
  justify-content: center;
`
const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 5px;
  background-color: #5CB646;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  border: none;
  margin-top: 10px;
`
// import { Container } from './styles';
export  class ActionButton extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    <ContainerButton> 
      <Button> {this.props.text} </Button>
    </ContainerButton>
    )
  }
}