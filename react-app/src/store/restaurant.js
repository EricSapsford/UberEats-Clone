//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================

//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================

const GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM = "restaurants/getAllRestaurantsWithOneMenuItem"
const GET_ONE_RESTAURANT = "restaurants/getOneRestaurant"
const CREATE_RESTAURANT = "restaurants/createRestaurant"
const UPDATE_RESTAURANT = "restaurants/updateRestaurant"
const DELETE_RESTAURANT = "restaurants/deleteRestaurant"
const CREATE_RESTAURANT_IMAGE = "restaurants/createRestaurantImage"
const UPDATE_RESTAURANT_IMAGE = "restaurants/updateRestaurantImage"

//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================

const getAllRestaurantsWithOneMenuItem = (rest) => {
  return {
    type: GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM,
    restaurants
  }
}

//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================

export const getAllRestaurantsWithOneMenuItemThunk = () => async (dispatch) => {
  const res = await fetch("/api/restaurants", {
    method: "GET",
  })
  if (res.ok) {
    const { restaurants } = await res.json();
    console.log("data inside thunk", data)
    if (data.errors) {
      return;
    }

    dispatch(getAllRestaurantsWithOneMenuItem(data))
  }
}

//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================

const initialState = {
  allRestaurants: {},
  singleRestaurant: {}
}

const restaurantReducer = (state = initialState, action) => {

  switch(action.type) {
    case GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM: {
      const newState = { ...state, allRestaurants: {} }

      action.restaurants.forEach((restObj) => {
        newState.allRestaurants[restObj.id] = restObj
      });

      return newState
    }

    default: {
      return state
    }
  }
}
