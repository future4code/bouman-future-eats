const initialState = {
    active: {},
    history: [],
    // possuem as chaves: totalPrice, restaurantName, createdAt, expiresAt
    selectedDishes: []
    //possui objetos com as chaves: id, quantity
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
        case 'UPDATE_SELECTED_DISHES':
            return {
                ...state, 
                selectedDishes: [
                    ...state.selectedDishes, 
                    { id: action.payload.id, quantity: action.payload.quantity} 
                ]
            }

        case 'REMOVE_DISH':
            const filteredSelectedDishes = state.selectedDishes.filter(
                dish => dish.id !== action.payload.id)
            return {...state, selectedDishes: filteredSelectedDishes}
       
        default: return state
    }
}