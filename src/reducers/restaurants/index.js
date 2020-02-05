const initialState = {
    restaurantList: [],
    // cada item é um objeto com as mesmas chaves do selectedRestaurant, exceto pelos products
    selectedRestaurant: {
        id: '',
        name: '',
        category: '',
        deliveryTime: 0,
        description: '',
        shipping: 0,
        address: '',
        logoUrl: '',
        products: []
        // cada item é um objeto com as chaves: id, name, description, category, price, photoUrl
    }
}

export const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_RESTAURANT_LIST':
            return ({
                ...state,
                restaurantList: action.payload
            })
        case 'SELECT_RESTAURANT':
            return ({
                ...state,
                selectedRestaurant: action.payload
            })
        default: return state
    }
}