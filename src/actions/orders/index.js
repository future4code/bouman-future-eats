import axios from 'axios'


const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

const storeActiveOrder = activeOrder => ({
    type: "STORE_ACTIVE_ORDER",
    payload: { activeOrder }
})

const storeOrderHistory = orderHistory => ({
    type: "STORE_ORDER_HISTORY",
    payload: { orderHistory }
})


export const placeOrder = (order, selectedRestaurant) => dispatch => {

    const token = window.localStorage.getItem('token')
    const data = {
        "products": order.dishes,
        "paymentMethod": order.paymentMethod
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.post(
        `${baseUrl}/restaurants/${selectedRestaurant.id}/order`,
        data, 
        headers
    ).then(
        response => {
           dispatch( storeActiveOrder(response.data.order) )            
        }
    ).catch(
        error => alert(error)
    )
}

export const getActiveOrder = () => dispatch => {

    const token = window.localStorage.getItem('token')

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.get(
        `${baseUrl}/active-order`,
        headers
    ).then(
        response => {
           dispatch( storeActiveOrder(response.data.order) )            
        }
    ).catch(
        error => alert(error)
    )
}

export const getOrderHistory = () => dispatch => {

    const token = window.localStorage.getItem('token')

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.get(
        `${baseUrl}/orders/history`,
        headers
    ).then(
        response => {
           dispatch( storeOrderHistory(response.data.order) )            
        }
    ).catch(
        error => alert(error)
    )
}

