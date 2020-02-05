import axios from 'axios'
import { routes } from '../../containers/Router'
import { push } from 'connected-react-router'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

const storeProfile = profile => ({
    type: "STORE_PROFILE",
    payload: { profile }
})

const storeAddressDetails = address => ({
    type: "STORE_ADDRESS_DETAILS",
    payload: { address }
})

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
            dispatch(storeProfile(response.data.user))
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
            dispatch(storeProfile(response.data.user))
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
            dispatch(storeProfile(response.data.user))
            if (response.data.user.hasAddress) {
                dispatch(push(routes.home))
            } else {
                dispatch(push(routes.address))
            }
        }
    ).catch(
        error => alert(error)
    )
}

export const getAddressDetails = () => dispatch => {

    const token = window.localStorage.getItem('token')
    
    const headers = {
        headers: { 
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.get(
        `${baseUrl}/profile/address`,
        headers
    ).then(
        response => {
            dispatch(storeAddressDetails(response.data.address))          
        }
    ).catch(
        error => alert(error)
    )
}

export const getProfile = () => dispatch => {

    const token = window.localStorage.getItem('token')
    
    const headers = {
        headers: { 
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.get(
        `${baseUrl}/profile`,
        headers
    ).then(
        response => {
            dispatch(storeProfile(response.data.user))          
        }
    ).catch(
        error => alert(error)
    )
}

export const updateProfile = user => dispatch => {

    const token = window.localStorage.getItem('token')
    const data = {
        "name": user.name,
        "email": user.email,
        "cpf": user.cpf
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }

    axios.put(
        `${baseUrl}/profile`,
        data, 
        headers
    ).then(
        response => {
            dispatch(storeProfile(response.data.user))           
        }
    ).catch(
        error => alert(error)
    )
}