import React from 'react';
import styled from 'styled-components'
import { updateSelectedDishes, removeDish } from '../../actions/orders'
import { connect } from 'react-redux';
import SelectQuantity, {TextButton} from '../SelectQuantity'


const MainContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display:flex;
  position: relative;
  margin-bottom: 8px;
  `

const TextContainer = styled.div`
  margin-left: 16px;
  margin-top: 18px;
`

const DishMainName = styled.p`
  width: 167px;
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
`

const DishDescription = styled.p`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin: 0px;
  margin-top: 8px;
`
const Price = styled.p`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0px;
  margin-top: 4px;
`

const ButtonRemove = styled.button`
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e02020;
  background: white;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  p {
    color: #e02020
  }
`

const Quantity = styled.button`
  width: 40px;
  height: 31px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: solid 1px #5cb646;
  background: white;
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  p {
    color: #5cb646
  }
`


function DishCard(props) {

  const quantity = () => props.selectedDishes.filter(
    dish => dish.id === props.id
  ).map(
    dish => dish.quantity
  )

  return (
    <MainContainer>
      <img width='100' src={props.photoUrl} alt="PratoDoRestaurante" />
      <TextContainer>
        <DishMainName>{props.name}</DishMainName>
        <DishDescription>{props.description}</DishDescription>

        <Price>{`R$ ${props.price}`}</Price>
        {quantity().length !== 0 && (<Quantity><TextButton>{quantity()}</TextButton></Quantity>)}

        {quantity().length !== 0 ? 
        <ButtonRemove onClick={() => props.removeDish(props.id)}><p>Remover</p></ButtonRemove> : 
        <SelectQuantity updateSelectedDishes={props.updateSelectedDishes} id={props.id}/>}

      </TextContainer>
    </MainContainer>
  );
}

export default connect(
  state => ({
    selectedDishes: state.orders.selectedDishes
  }),
  dispatch => ({
    updateSelectedDishes: (id, quantity) => dispatch(updateSelectedDishes(id, quantity)),
    removeDish: (id) => dispatch(removeDish(id))
  })
)(DishCard)




