import React, { Component } from 'react';
import styled from 'styled-components'

import DishCard from '../../components/DishCard/index'
import { ActionButton } from '../../components/ActionButton/index'
import BottomNav from '../../components/BottomNav/index'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/users'
import { getRestaurants } from '../../actions/restaurants'
import { placeOrder } from '../../actions/orders'


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

const RestaurantDescribe = styled.p`
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

const DeliverPriceDiv = styled.div`
  width: 100%;
  height: 16px;
  text-align: left;
  margin-top: 16px;
`

const DeliverPrice = styled.p`
  
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

const SubtotalDiv = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const SubtotalP = styled.p`
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

const TotalPrice = styled.p`
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

const PaymentsMethods = styled.div`
  width: 100%;
  height: 129px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

const PaymentsTittle = styled.p`
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

const PaymentLabel = styled.label`
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

const InputRadio = styled.input`
  width: 24px;
  height: 24px;
  object-fit: contain;
`

const InputContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`

const BottomNavDiv = styled.div`
  position: sticky;
  bottom: 0px;

`

// ------------------------------STYLED COMPONENTS--------------------------------




export class Cart extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getProfile()
    this.props.getRestaurants()
  }

  generateOrderSubtotal = () => {
    let subTotal = 0
    for (let dish of this.props.selectedDishes) {
      for (let product of this.props.selectedRestaurant.products) {
        if (product.id === dish.id) {
          subTotal += product.price * dish.quantity
        }
      }
    }

    return subTotal
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.placeOrder(
      {
        dishes: this.props.selectedDishes,
        paymentMethod: 'creditcard'
      },
      this.props.selectedRestaurant
    )
    
  }


  render() {
    return (
      <div>
        <MainContainer>
          <TittlePage>Meu carrinho</TittlePage>
          <AdressContainer>
            <AdressDeliver>Endereço de entrega</AdressDeliver>
            <AdressDeliver style={{ color: "black" }}>{this.props.profile.address}</AdressDeliver>
          </AdressContainer>
        </MainContainer>
        <FitPageContainer>
          <RestaurantDescribe>
            {this.props.selectedRestaurant.name}
          </RestaurantDescribe>

          <RestaurantDescribe style={{ color: "#b8b8b8" }}>
            {this.props.selectedRestaurant.address}
          </RestaurantDescribe>

          <RestaurantDescribe style={{ color: "#b8b8b8" }}>
            {this.props.selectedRestaurant.deliveryTime - 5} -
            {this.props.selectedRestaurant.deliveryTime} min
          </RestaurantDescribe>
          {this.props.selectedDishes.map(
            dish => (
              this.props.selectedRestaurant.products.filter(
                product => product.id === dish.id
              ).map(
                product =>
                  <DishCard name={product.name}
                    description={product.description}
                    price={product.price}
                    photoUrl={product.photoUrl}
                    id={product.id} />

              )
            )

          )

          }


          {/* Aqui começa a aba de preços */}

          <DeliverPriceDiv>
            <DeliverPrice>Frete R$ {this.props.selectedRestaurant.shipping}</DeliverPrice>
          </DeliverPriceDiv>

          {/* Subtotal Div estilizada  */}

          <SubtotalDiv>
            <SubtotalP>SUBTOTAL</SubtotalP>
            <TotalPrice>R${this.generateOrderSubtotal() + this.props.selectedRestaurant.shipping}</TotalPrice>
          </SubtotalDiv>

          {/* Formas de pagamento */}
          <form onSubmit={this.handleSubmit}>
            <PaymentsMethods>
              <PaymentsTittle>Formas de pagamento</PaymentsTittle>

              <InputContainer>
                <InputRadio type="radio" id="cash" name="paymentMethod" value="cash"
                  checked />
                <PaymentLabel for="cash">Dinheiro</PaymentLabel>
              </InputContainer>
              <InputContainer>
                <InputRadio type="radio" id="Credit card" name="paymentMethod" value="Credit card" />
                <PaymentLabel for="CreditCard">Cartão de crédito</PaymentLabel>
              </InputContainer>



            </PaymentsMethods>

            <ActionButton type='submit' text="Confirmar"></ActionButton>
          </form>




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
    selectedDishes: state.orders.selectedDishes,
    activeOrder: state.orders.active,
  }),
  dispatch => ({
    getProfile: () => dispatch(getProfile()),
    getRestaurants: () => dispatch(getRestaurants()),
    placeOrder: (order, restaurant) => dispatch(placeOrder(order, restaurant))
  })
)

  (Cart)

