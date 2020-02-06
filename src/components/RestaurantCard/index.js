import React, { Component } from 'react';
import styled from 'styled-components'

const MainContainer = styled.div `
  display: flex;
  width: 100%;
  /* height: 188px; */
  flex-direction: column;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 8px;
`

const ImgLogoDiv = styled.div `
  width: 325px;
  img {
    width: 100%;
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 0px;
  }
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
  padding: 16px;
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
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
`

export  class RestaurantCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <MainContainer onClick={this.props.onclick}>
        <ImgLogoDiv>
          <img src={this.props.photoUrl}/>
        </ImgLogoDiv>
        <RestaurantName>{this.props.name}</RestaurantName>        
        <ContextP><span>{`${this.props.deliveryTime - 5} - ${this.props.deliveryTime} min `}</span><span>{`Frete R$${this.props.shipping},00`}</span></ContextP>
        <ContextP>{this.props.address}</ContextP>
      </MainContainer>
    );
  }
}
