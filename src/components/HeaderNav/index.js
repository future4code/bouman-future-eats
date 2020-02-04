import React, { Component } from 'react';
import styled from 'styled-components'
import BackArrow from '../../img/back.png'

const StyledDiv = styled.div `
  display: flex;
  width: 100vw;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid grey;
  justify-content: center;
  img {    
    width: 23px;
    height: 24px;
    position: absolute;
    left: 16px;
  }
`

const StyledP = styled.p `
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`


export class HeaderNav extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <StyledDiv>          
          <img src ={BackArrow} style={{display: this.props.display}}></img>
          <StyledP>{this.props.menuText } </StyledP>          
        </StyledDiv>
      )
  }
}
