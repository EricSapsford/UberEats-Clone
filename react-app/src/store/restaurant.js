//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================

//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================

const GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM = "restaurants/getAllRestaurantsWithOneMenuItem"
const GET_ALL_RESTAURANTS_BY_CATAGORY = "restaurants/getAllRestaurantsByCatagory"
const GET_ONE_RESTAURANT = "restaurants/getOneRestaurant"
const GET_ALL_RESTAURANTS_BY_CURRENT_USER = "restaurants/getAllRestaurantsByCurrentUser"
const CREATE_RESTAURANT = "restaurants/createRestaurant"
const UPDATE_RESTAURANT = "restaurants/updateRestaurant"
const DELETE_RESTAURANT = "restaurants/deleteRestaurant"
const CREATE_RESTAURANT_IMAGE = "restaurants/createRestaurantImage"
const UPDATE_RESTAURANT_IMAGE = "restaurants/updateRestaurantImage"

//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================

const getAllRestaurantsWithOneMenuItem = (restaurants) => {
  return {
    type: GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM,
    restaurants
  }
}

const getAllRestaurantsByCatagory = (restaurants) => {
  return {
    type: GET_ALL_RESTAURANTS_BY_CATAGORY,
    restaurants
  }
}

const getAllRestaurantsByCurrentUser = (restaurants) => {
  return {
    type: GET_ALL_RESTAURANTS_BY_CURRENT_USER,
    restaurants
  }
}

const getOneRestaurant = (restaurant) => {
  return {
    type: GET_ONE_RESTAURANT,
    restaurant
  }
};

//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================

// THUNK: GET ONE RESTAURANT
export const getOneRestaurantThunk = (restaurantId) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${restaurantId}`, { method: "GET" });
  // console.log("***** in getOneRestaurantThunk: res ****", res)

  if (res.ok) {
    // console.log("***** in getOneRestaurantThunk: res.ok ****")
    // console.log("***** in getOneRestaurantThunk: res ****", res)
    const restaurant = await res.json();
    // console.log("***** in getOneRestaurantThunk: restaurant ****", restaurant)
    dispatch(getOneRestaurant(restaurant));
  } else {
    // console.log("***** in getOneRestaurantThunk: RES NOT OK ****")
    const errors = await res.json();
    // console.log("***** in getOneRestaurantThunk: errors ****", errors)
    return errors;
  };
};

// THUNK: GET ALL RESTAURANTS WITH ONE MENU ITEM
export const getAllRestaurantsWithOneMenuItemThunk = () => async (dispatch) => {
  const res = await fetch("/api/restaurants", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (res.ok) {
    const { restaurants } = await res.json();

    // if (restaurants.errors) {
    //   return;
    // }
    dispatch(getAllRestaurantsWithOneMenuItem(restaurants))
  } else {
    const errors = await res.json();
    return errors
  }

}

// THUNK: GET ALL RESTAURANTS BY CURRENT USER
export const getAllRestaurantsByCurrentUserThunk = () => async (dispatch) => {
  const res = await fetch("/api/restaurants/current", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (res.ok) {
    const { restaurants } = await res.json();
    // if (restaurants.errors) {
    //   return;
    // }
    dispatch(getAllRestaurantsByCurrentUser(restaurants))
  } else {
    const errors = await res.json();
    return errors
  }

}

// THUNK: GET ALL RESTAURANTS BY CATEGORY
export const getAllRestaurantsByCatagoryThunk = (catagory) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${catagory}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (res.ok) {
    const { restaurants } = await res.json();
    // if (restaurants.errors) {
    //   return;
    // }
    dispatch(getAllRestaurantsByCatagory(restaurants))
  } else {
    const errors = await res.json();
    return errors
  }

}


//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================

const initialState = {
  allRestaurants: {},
  catagoryRestaurants: {},
  usersRestaurants: {},
  singleRestaurant: {}
}

const restaurantReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ONE_RESTAURANT: {
      // console.log("***** in GET_ONE_RESTAURANT: Reducer ****")
      // console.log("***** in GET_ONE_RESTAURANT: state ****", state)
      // console.log("***** in GET_ONE_RESTAURANT: action ****", action)
      const newState = { ...state, singleRestaurant: {} };
      newState.singleRestaurant = action.restaurant.restaurant;
      // console.log("***** in GET_ONE_RESTAURANT: newState ****", newState)
      return newState;
    }

    case GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM: {
      const newState = { ...state, allRestaurants: {} }
      action.restaurants.forEach((restObj) => {
        newState.allRestaurants[restObj.id] = restObj
      });
      return newState
    }

    case GET_ALL_RESTAURANTS_BY_CATAGORY: {
      const newState = { ...state, catagoryRestaurants: {} }
      action.restaurants.forEach((restObj) => {
        newState.catagoryRestaurants[restObj.id] = restObj
      });
      return newState
    }

    case GET_ALL_RESTAURANTS_BY_CURRENT_USER: {
      const newState = { ...state, usersRestaurants: {} }
      action.restaurants.forEach((restObj) => {
        newState.usersRestaurants[restObj.id] = restObj
      });
      return newState
    }

    default: {
      return state
    }
  }
}

export default restaurantReducer;
