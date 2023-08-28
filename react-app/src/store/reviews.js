// Constant
const GET_REVIEWS = "reviews/getReviews"
const CREATE_REVIEW = "reviews/createReview"


// Action Creator
const getReviews = (restaurant) => {
    return {
        type: GET_REVIEWS, 
        restaurant
    }
}

const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

// Thunks
export const thunkGetReviews = (restaurantId) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    if (res.ok) {
        const {reviews} = await res.json()
        console.log("review thunk data: ", reviews);
        dispatch(getReviews(restaurantId))
    }else{
        const errors = await res.json()
        return errors
    }
}

export const thunkCreateReview = (restaurantId, review) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const newReview = await res.json()
        dispatch(createReview(newReview))
        return newReview
    } else {
        const errors = await res.json()
        return errors
    }
}

// Reducer
const initialState = {
    reviews: {}
}

const reviewsReducer = (state = initialState, action ) => {
    switch(action.type) {
        case GET_REVIEWS: {
            const newState = {...state, reviews: {}}
            action.restaurant.forEach(review => {
                newState.reviews[review.id] = review
            });
            return newState
        }
        case CREATE_REVIEW: {
            const newState = {...state, reviews: {
                ...state.reviews,
                [action.review.id]: action.review
            }}
            return newState
        }
        default: {
            return state
        }
    }
}

export default reviewsReducer;