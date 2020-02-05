import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const signUp = user => dispatch => {

    const data = {
        'name': user.name,
        'email': user.email,
        'cpf': user.cpf,
        'password': user.password
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post(
        `${baseUrl}/signup`,
        data, 
        headers
    ).then(
        response => {
            window.localStorage.setItem('token', response.data.token)

            if (!response.data.user.hasAddress) {
                dispatch(push(routes.address))
            }
        }
    ).catch(
        error => alert(error)
    )
}

export const addAddress = address => dispatch => {

    const token = window.localStorage.getItem('token')
    const data = {
        "street": address.street,
        "number": address.number,
        "neighbourhood": address.neighbourhood,
        "city": address.city,
        "state": address.state,
        "complement": address.complement
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.put(
        `${baseUrl}/address`,
        data, 
        headers
    ).then(
        response => {
            window.localStorage.setItem('token', response.data.token)

            if (response.data.user.hasAddress) {
                dispatch(push(routes.home))
            }
        }
    ).catch(
        error => alert(error)
    )
}

export const login = (email, password) => dispatch => {
    const data = {
        "email": email,
        "password": password
    }
    const headers = {
        headers: { 'Content-Type': 'application/json'  }
    }

    axios.post(
        `${baseUrl}/login`,
        data, 
        headers
    ).then(
        response => {
            window.localStorage.setItem('token', response.data.token)

            if (response.data.user.hasAddress) {
                dispatch(push(routes.home))
            } else {
                dispatch(push(routes.address))
            }
        }
    ).catch(
        error => alert(error.message)
    )
}