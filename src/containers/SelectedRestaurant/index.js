import React from 'react';
import { RestaurantCard } from '../../components/RestaurantCard'
import DishCard from '../../components/DishCard'
import { HeaderNav } from '../../components/HeaderNav'
import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'


export function SelectedRestaurants(props) {
    return (
        <div>
            <HeaderNav menuText='Restaurante' onClick={props.goBack}/>
            <RestaurantCard
                name={props.selectedRestaurant.name}
                photoUrl={props.selectedRestaurant.logoUrl}
                category={props.selectedRestaurant.category}
                address={props.selectedRestaurant.address}
                shipping={props.selectedRestaurant.shipping}
                deliveryTime={props.selectedRestaurant.deliveryTime}
            />
            <h3>Refeições</h3>
            <hr />
            {props.selectedRestaurant.products.map(
                dish => <DishCard
                    id={dish.id}
                    name={dish.name}
                    photoUrl={dish.photoUrl}
                    price={dish.price}
                    description={dish.description}                    
                />
            )}
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

