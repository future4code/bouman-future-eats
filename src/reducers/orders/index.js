const initialState = {
    active: {},    
    history: []
}

export const orders = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_ACTIVE_ORDER':
            return ({
                ...state,
                active: action.payload
            })
        case 'STORE_ORDER_HISTORY':
            return ({
                ...state,
                history: action.payload
            })
        default: return state
    }
}