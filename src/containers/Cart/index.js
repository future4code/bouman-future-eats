import React, { Component } from 'react';
import styled from 'styled-components'

import DishCard from '../../components/DishCard/index'
import {ActionButton} from '../../components/ActionButton/index'
import BottomNav from '../../components/BottomNav/index'
import { connect } from 'react-redux'
import {getProfile} from '../../actions/users'


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
  padding-right: 32px;
  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

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

const DeliverPriceDiv = styled.div `
  width: 100%;
  height: 16px;
  text-align: left;
  margin-top: 16px;
`

const DeliverPrice = styled.p `
  
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #000000;
  margin: 0px;
`

const SubtotalDiv = styled.div `
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const SubtotalP = styled.p `
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0px;
`

const TotalPrice = styled.p `
  width: 164px;
  height: 21px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
  margin: 0px;
`

const PaymentsMethods = styled.div `
  width: 100%;
  height: 129px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

const PaymentsTittle = styled.p `
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0px;
  border-bottom: 1px solid black;
  padding-bottom: 8px;
`

const PaymentLabel = styled.label `
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 8px;

`

const InputRadio = styled.input `
  width: 24px;
  height: 24px;
  object-fit: contain;
`

const InputContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`

const BottomNavDiv = styled.div `
  position: sticky;
  bottom: 0px;

`

// ------------------------------STYLED COMPONENTS--------------------------------




export  class Cart extends Component {
  constructor(props){
    super(props)
  }
   componentDidMount() {
     this.props.getProfile()
   }

  render() {
    return(
      <div>
        <MainContainer>
        <TittlePage>Meu carrinho</TittlePage>
        <AdressContainer>
          <AdressDeliver>Endereço de entrega</AdressDeliver>
          <AdressDeliver style={{color: "black"}}>{this.props.profile.address}</AdressDeliver>
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

          <DishCard name="Rock Ribs" description="Pão, carne, queijo, cebola-roxa, tomate, alface e molho" price="46,0" photoUrl="http://soter.ninja/futureFoods/logos/tadashii.png"/>
        
        {/* Aqui começa a aba de preços */}

          <DeliverPriceDiv>
            <DeliverPrice>Frete R$ 6,00</DeliverPrice>
          </DeliverPriceDiv>
        
        {/* Subtotal Div estilizada  */}

          <SubtotalDiv>
            <SubtotalP>SUBTOTAL</SubtotalP>
            <TotalPrice>R$67,00</TotalPrice>
          </SubtotalDiv>

        {/* Formas de pagamento */}

          <PaymentsMethods>
            <PaymentsTittle>Formas de pagamento</PaymentsTittle> 
              
              <InputContainer>
                <InputRadio type="radio" id="cash" name="cash" value="cash"
                      checked/>
                <PaymentLabel for="cash">Dinheiro</PaymentLabel>
              </InputContainer>

              <InputContainer>
                <InputRadio type="radio" id="Credit card" name="Credit card" value="Credit card"/>
                <PaymentLabel for="CreditCard">Cartão de crédito</PaymentLabel>
              </InputContainer>
          </PaymentsMethods>

          {/* Botão Confirmar */}

          <ActionButton text="Confirmar"></ActionButton>

        </FitPageContainer>


      <BottomNavDiv>
         {/* Bottom nav importada */}

          <BottomNav></BottomNav>
      </BottomNavDiv>
      </div>
    )
  }
}

export default connect(
  state => ({
      selectedRestaurant: state.restaurants.selectedRestaurant,
      profile: state.users.profile,
  }),
  dispatch => ({
      getProfile: () => dispatch (getProfile())
  })
  )
  
  (Cart)
  
