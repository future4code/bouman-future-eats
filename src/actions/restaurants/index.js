import axios from 'axios'
import { routes } from '../../containers/Router'
import { push } from 'connected-react-router'


const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats/restaurants'

const storeRestaurantList = restaurants => ({
    type: 'STORE_RESTAURANT_LIST',
    payload: { restaurants }
})

const selectRestaurant = restaurant => ({
    type: 'SELECT_RESTAURANT',
    payload: { restaurant }
})

export const getRestaurants = () => dispatch => {

    const token = window.localStorage.getItem('token')
    const headers = {
        headers: { auth: token }
    }

    axios.get(baseUrl, headers).then(
        response => dispatch(
            dispatch(storeRestaurantList(response.data.restaurants))
        )
    ).catch(
        error => alert(error)
    )
}

export const getRestaurantDetails = (id) => dispatch => {

    const token = window.localStorage.getItem('token')
    const headers = {
        headers: { auth: token }
    }

    axios.get(`${baseUrl}/${id}`, headers).then(
        response => {
            dispatch( selectRestaurant(response.data.restaurant))
            dispatch( push(routes.restaurants))
        }
    ).catch(
        error => alert(error)
    )
}
