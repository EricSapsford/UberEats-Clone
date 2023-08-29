

//ACTION TYPES
export const LOAD_PAST_ORDERS = "orders/getPastOrders"

//ACTION CREATORS
export const getPastOrders = (orders) => {
    return {
        type: LOAD_PAST_ORDERS,
        orders
    }
}

//THUNKS
export const thunkGetPastOrders = () => async (dispatch) => {
    const res = await fetch("/api/orders", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })

    if (res.ok) {
        const data = res.json()
        dispatch(getPastOrders(data.pastOrders))
        return data
    }
}

//REDUCER
const initialState = { pastOrders: [], shoppingCart: [] }

export const ordersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PAST_ORDERS:
            newState = { ...state, pastOrders: [], shoppingCart: [...state.shoppingCart] }
            newState.pastOrders = action.orders
            return newState;
        default:
            return state;
    }
}
