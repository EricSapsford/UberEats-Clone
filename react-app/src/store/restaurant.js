//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================
//==================================== IMPORTS ====================================

//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================

const GET_ALL_RESTAURANTS_WITH_ONE_MENU_ITEM = "restaurants/getAllRestaurantsWithOneMenuItem"
const GET_ALL_RESTAURANTS_BY_CATEGORY = "restaurants/getAllRestaurantsByCategory"
const GET_ONE_RESTAURANT = "restaurants/getOneRestaurant"
const GET_ALL_RESTAURANTS_BY_CURRENT_USER = "restaurants/getAllRestaurantsByCurrentUser"
const CREATE_RESTAURANT = "restaurants/createRestaurant"
const UPDATE_RESTAURANT = "restaurants/updateRestaurant"
const DELETE_RESTAURANT = "restaurants/deleteRestaurant"
// const CREATE_RESTAURANT_IMAGE = "restaurants/createRestaurantImage"
// const UPDATE_RESTAURANT_IMAGE = "restaurants/updateRestaurantImage"

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

const getAllRestaurantsByCategory = (restaurants) => {
  return {
    type: GET_ALL_RESTAURANTS_BY_CATEGORY,
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

const createRestaurant = (restaurant) => {
  return {
    type: CREATE_RESTAURANT,
    restaurant
  }
}

const updateRestaurant = (restaurant) => {
  return {
    type: UPDATE_RESTAURANT,
    restaurant
  }
}

const deleteRestaurant = (restaurantId) => {
  return {
    type: DELETE_RESTAURANT,
    restaurantId
  }
}

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
    return restaurants
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
export const getAllRestaurantsByCategoryThunk = (category) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/category/${category}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (res.ok) {
    const { restaurants } = await res.json();
    // if (restaurants.errors) {
    //   return;
    // }
    dispatch(getAllRestaurantsByCategory(restaurants))
  } else {
    const errors = await res.json();
    return errors
  }

}

// THUNK: CREATE RESTAURANT
export const createRestaurantThunk = (createdRestaurant) => async (dispatch) => {

  const { name, streetAddress, category, priceRange, imageUrl } = createdRestaurant
  const res = await fetch("/api/restaurants/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      street_address: streetAddress,
      category,
      price_range: priceRange,
      image_url: imageUrl
    })
  })
  if (res.ok) {
    const data = await res.json();
    // console.log("DATA IN THUNK", data)
    // console.log("CATEGORY", category)
    dispatch(createRestaurant(data));
    return data
  } else {
    const errors = await res.json();
    return errors
  }
}

//THUNK: UPDATE RESTAURANT
export const updateRestaurantThunk = (updatedRestaurant) => async (dispatch) => {
  const { restaurantId, name, streetAddress, category, priceRange, imageUrl } = updatedRestaurant
  const res = await fetch(`/api/restaurants/${restaurantId}/update`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      street_address: streetAddress,
      category,
      price_range: priceRange,
      image_url: imageUrl
    })
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(updateRestaurant(data));
    return data
  } else {
    const errors = await res.json();
    return errors
  }
}

//THUNK: DELETE RESTAURANT
export const deleteRestaurantThunk = (restaurantId) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${restaurantId}/delete`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  })

  if (res.ok) {
    const data = await res.json();
    // console.log("INSIDE DELETE THUNK RES.OK", data)
    dispatch(deleteRestaurant(restaurantId));
    return data;
  } else {
    // console.log("INSIDE DELETE THUNK ELSE", res)
    const errors = await res.json();
    return errors;
  }
}



//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================

const initialState = {
  allRestaurants: {},
  categoryRestaurants: {},
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
      const newState = { ...state, allRestaurants: {}, singleRestaurant: {} }
      action.restaurants.forEach((restObj) => {
        newState.allRestaurants[restObj.id] = restObj
      });
      return newState
    }

    case GET_ALL_RESTAURANTS_BY_CATEGORY: {
      const newState = { ...state, singleRestaurant: {}, categoryRestaurants: {} }
      action.restaurants.forEach((restObj) => {
        newState.categoryRestaurants[restObj.id] = restObj
      });
      return newState
    }

    case GET_ALL_RESTAURANTS_BY_CURRENT_USER: {
      const newState = { ...state, singleRestaurant: {}, usersRestaurants: {} }
      action.restaurants.forEach((restObj) => {
        newState.usersRestaurants[restObj.id] = restObj
      });
      return newState
    }

    case CREATE_RESTAURANT: {
      // console.log("IN CREATE RESTAURANT REDUCER")
      // console.log("IN CREATE RESTAURANT REDUCER - STATE", state)
      // console.log("IN CREATE RESTAURANT REDUCER - ACTION", action)
      if (action.restaurant.restuarant) {
        const newState = { ...state, usersRestaurants: { ...state.usersRestaurants } }
        newState.usersRestaurants[action.restaurant.restaurant.id] = action.restaurant.restaurant
        // console.log("NEWSTATE", newState)
        return newState;
      } else if (action.restaurant.errors) {
        return state
      } else {
        return state
      }
    }

    case UPDATE_RESTAURANT: {
      // console.log("IN UPDATE RESTAURANT REDUCER")
      // console.log("IN UPDATE RESTAURANT REDUCER - STATE", state)
      // console.log("IN UPDATE RESTAURANT REDUCER - ACTION", action)
      // console.log("FIND THE ID", action.restaurant.restaurant.id)
      // if (action.restaurant.restuarant) {
      if (action.restaurant.errors) {
        return state
      }
      const newState = { ...state, usersRestaurants: { ...state.usersRestaurants } }
      newState.usersRestaurants[action.restaurant.restaurant.id] = action.restaurant.restaurant
      // console.log("NEWSTATE", newState)
      return newState
      // } else if (action.restaurant.errors) {
      //   return state
      // } else {
      //   return state
      // }
    }

    case DELETE_RESTAURANT: {
      const newState = { ...state, usersRestaurants: { ...state.usersRestaurants } }
      delete newState.usersRestaurants[action.restaurantId]
      return newState;
    }

    default: {
      return state
    }
  }
}

export default restaurantReducer;
