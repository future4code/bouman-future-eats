import React, { Component } from 'react';
import styled from 'styled-components'
import {DishCard} from '../../components/DishCard/index'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
`

const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  height: 76px;
  padding: 16px;
`
const AdressDeliver = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  margin: 0px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-bottom: 8px;
`


const TittlePage = styled.p`
  margin: 20px 0px 0px 0px;
  border-bottom: 1px solid grey;
  height: 40px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`

const FitPageContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: left;
  padding: 16px;

`

const RestaurantDescribe = styled.p `
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
  margin: 0px;
  margin-bottom: 8px;
`

export default class Cart extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <MainContainer>
        <TittlePage>DADOS MOCKADOS!!!</TittlePage>
        <AdressContainer>
          <AdressDeliver>Endereço de entrega</AdressDeliver>
          <AdressDeliver style={{color: "black"}}>Rua Alessandra Vieira, 42</AdressDeliver>
        </AdressContainer>
        </MainContainer>
        <FitPageContainer>
          <RestaurantDescribe>
            Bullguer Vila Madalena
          </RestaurantDescribe>

          <RestaurantDescribe style={{color: "#b8b8b8"}}>
            Rua Fradique Coutinho, 1136 - Vila Madalena
          </RestaurantDescribe>

          <RestaurantDescribe style={{color: "#b8b8b8"}}>
            30 - 45 min
          </RestaurantDescribe>

          <DishCard name="Stencil" description="Pão, carne, queijo, cebola-roxa, tomate, alface e molho" price="46,0" photoUrl="http://soter.ninja/futureFoods/logos/tadashii.png"/>
        </FitPageContainer>
      </div>
    )
  }
}
