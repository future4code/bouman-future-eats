import React from 'react';
import { RestaurantCard } from '../../components/RestaurantCard'
import DishCard from '../../components/DishCard'
import { HeaderNav } from '../../components/HeaderNav'
import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
import styled from 'styled-components'
import BottomNav from '../../components/BottomNav/index'

const MainContainer = styled.div `
display: flex;
width: 95%;
flex-direction: column;
align-items: center;
margin-top: 10px;
`


const StyledDishMenuTittle = styled.p `
  width: 328px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`

const BottomNavDiv = styled.div `
    position: sticky;
    bottom: 0px;
`

const AjustScreenMobile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`


export function SelectedRestaurants(props) {
    return (

    <div>
        <AjustScreenMobile>
            <HeaderNav menuText='Restaurante' onClick={props.goBack}/>

            <MainContainer>
                <RestaurantCard
                    name={props.selectedRestaurant.name}
                    photoUrl={props.selectedRestaurant.logoUrl}
                    category={props.selectedRestaurant.category}
                    address={props.selectedRestaurant.address}
                    shipping={props.selectedRestaurant.shipping}
                    deliveryTime={props.selectedRestaurant.deliveryTime}
                />
                <StyledDishMenuTittle>Refeições</StyledDishMenuTittle>
                    <hr/>
                {props.selectedRestaurant.products.map(
                    dish => <DishCard
                        id={dish.id}
                        name={dish.name}
                        photoUrl={dish.photoUrl}
                        price={dish.price}
                        description={dish.description}                       
                    />

                    )}
                </MainContainer>   
            
        </AjustScreenMobile>
        <BottomNavDiv>
            <BottomNav/>
        </BottomNavDiv>                
         

    </div>    

        

    )
}


export default connect(
    state => ({
        selectedRestaurant: state.restaurants.selectedRestaurant
    }),
    dispatch => ({
        goBack: () => dispatch(goBack())
    })
)(SelectedRestaurants);

