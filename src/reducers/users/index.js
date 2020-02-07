const initialState = {
    profile: {},                // id, name, email, cpf, hasAddress, address
    addressDetails: {}          // street, number, apartment, neighbourhood, city, state
}

export const users = (state = initialState, action) => {
    switch(action.type) {
        case 'STORE_PROFILE':
            return ({
                ...state,
                profile: action.payload.profile
            })
        case 'STORE_ADDRESS_DETAILS':
            return({
                ...state,
                addressDetails: action.payload.address
            })
        default: return state
    }
}