// Constant
const GET_REVIEWS = "reviews/getReviews"
const CREATE_REVIEW = "reviews/createReview"
const REMOVE_REVIEW = "reviews/removeReview"

// Action Creator
const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS, 
        reviews
    }
}

const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
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
        dispatch(getReviews(reviews))
    }else{
        const errors = await res.json()
        return errors
    }
}

export const thunkCreateReview = (restaurantId, review) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
			review_text: review.reviewText,
			stars: review.stars,
		})
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

export const thunkRemoveReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}/delete`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removeReview(reviewId))
    }else{
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
            action.reviews.forEach(review => {
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
        case REMOVE_REVIEW: {
            const newState = {...state}
            delete newState.reviews[action.reviewId]
            return newState
        }
        default: {
            return state
        }
    }
}

export default reviewsReducer;