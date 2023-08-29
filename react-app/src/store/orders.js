

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
export const thunkGetPastOrders = (id) => async (dispatch) => {
    const res = await fetch(`/api/orders/${id}`, {
        method: "GET",
        // headers: {"Content-Type": "application/json"}
    })
    // console.log("*** res from getPastOrders thunk:", res)

    if (res.ok) {
        // console.log("*** in getPastOrders thunk res ok ***")
        const data = await res.json()
        // console.log("*** in getPastOrders thunk data ***", data)
        dispatch(getPastOrders(data.past_orders))
        return data
    } else {
        // console.log("*** in getPastOrders thunk res not ok ***")
        const errors = await res.json()
        // console.log("*** in getPastOrders thunk errors ***", errors)
        return errors
    }
}

//REDUCER
const initialState = { pastOrders: [], shoppingCart: [] }

export const ordersReducer = (state = initialState, action) => {
    // let newState;
    switch (action.type) {
        case LOAD_PAST_ORDERS: {
            // console.log("*** in LOAD_PAST_ORDERS action ***", action)
            const newState = { ...state, pastOrders: [], shoppingCart: [...state.shoppingCart] }
            newState.pastOrders = action.orders
            return newState
        }
        default:
            return state;
    }
}
