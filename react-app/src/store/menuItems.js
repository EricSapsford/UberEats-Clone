// 1. ADDED TO react-app/src/store/index.js:
// import menuItemsReducer from './menuItems'
// menuItems: menuItemsReducer,

//============================= ACTION TYPE CONSTANTS =============================
//============================= ACTION TYPE CONSTANTS =============================
//============================= ACTION TYPE CONSTANTS =============================
//============================= ACTION TYPE CONSTANTS =============================

const GET_ONE_MENU_ITEM = "menuItems/getOneMenuItem";
const GET_ALL_MENU_ITEMS_FOR_REST = "menuItems/getAllMenuItemsForRest";
const CREATE_MENU_ITEM_FOR_REST = "menuItems/createMenuItemForRest";
const UPDATE_MENU_ITEM = "menuItems/updateMenuItem";
const DELETE_MENU_ITEM = "menuItems/deleteMenuItem";

//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================

const getOneMenuItem = (menuItem) => {
  return {
    type: GET_ONE_MENU_ITEM,
    menuItem
  }
};

const getAllMenuItemsForRest = (menuItems) => {
  return {
    type: GET_ALL_MENU_ITEMS_FOR_REST,
    menuItems
  }
};

const createMenuItemForRest = (menuItem) => {
  return {
    type: CREATE_MENU_ITEM_FOR_REST,
    menuItem
  }
};

const updateMenuItem = (menuItem) => {
  return {
    type: UPDATE_MENU_ITEM,
    menuItem
  }
};

const deleteMenuItem = (menuItemId) => {
  return {
    type: DELETE_MENU_ITEM,
    menuItemId
  }
};

//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================

// THUNK: GET ONE MENU ITEM
export const getOneMenuItemThunk = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menu-items/${menuItemId}`, { method: "GET" });

  if (res.ok) {
    // console.log("***** in getOneMenuItemThunk: res.ok ****")
    // console.log("***** in getOneMenuItemThunk: res ****", res)
    const menuItem = await res.json();
    // console.log("***** in getOneMenuItemThunk: menuItem ****", menuItem)
    dispatch(getOneMenuItem(menuItem));
  } else {
    // console.log("***** in getOneMenuItemThunk: RES NOT OK ****")
    const errors = await res.json();
    // console.log("***** in getOneMenuItemThunk: errors ****", errors)
    return errors;
  };
};

// THUNK: GET ALL MENU ITEMS FOR A RESTAURANT
export const getAllMenuItemsForRestThunk = (restaurantId) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${restaurantId}/menu`, { method: "GET" });

  if (res.ok) {
    // console.log("***** in getAllMenuItemsForRestThunk: res.ok ****")
    // console.log("***** in getAllMenuItemsForRestThunk: res ****", res)
    const menuItems = await res.json();
    // console.log("***** in getAllMenuItemsForRestThunk: menuItems ****", menuItems)
    dispatch(getAllMenuItemsForRest(menuItems));
  } else {
    console.log("***** in getAllMenuItemsForRestThunk: RES NOT OK ****")
    const errors = await res.json();
    console.log("***** in getAllMenuItemsForRestThunk: errors ****", errors)
    return errors;
  };
};

// THUNK: CREATE MENU ITEM FOR A RESTAURANT
export const createMenuItemForRestThunk = (menuItem) => async (dispatch) => {
  const { restaurantId, name, type, price, description, imageUrl } = menuItem;

  const res = await fetch(`/api/restaurants/${restaurantId}/menu/new`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      restaurant_id: restaurantId,
      name,
      type,
      price,
      description,
      image_url: imageUrl
    })
  });

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(createMenuItemForRest(menuItem));
  } else {
    const errors = await res.json();
    return errors;
  };
};

// THUNK: UPDATE MENU ITEM
export const updateMenuItemThunk = (menuItem) => async (dispatch) => {
  const { restaurantId, name, type, price, description, imageUrl } = menuItem;

  const res = await fetch(`/api/restaurants/${restaurantId}/menu`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      restaurant_id: restaurantId,
      name,
      type,
      price,
      description,
      image_url: imageUrl
    })
  });

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(updateMenuItem(menuItem));
  } else {
    const errors = await res.json();
    return errors;
  };
};

// THUNK: DELETE MENU ITEM
export const deleteMenuItemThunk = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/groups/${menuItemId}`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(deleteMenuItem(menuItemId));
    return data;
  } else {
    const errors = await res.json();
    return errors;
  }
};

//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================

const initialState = {
  allMenuItemsForRest: {},
  singleMenuItem: {}
};

export default function menuItemsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ONE_MENU_ITEM: {
      const newState = { ...state, singleMenuItem: {} };
      newState.singleMenuItem = action.menuItem;
      return newState;
    }

    case GET_ALL_MENU_ITEMS_FOR_REST: {
      const newState = { ...state, allMenuItemsForRest: {} };
      // console.log("***** in GET_ALL_MENU_ITEMS_FOR_REST action.menuItems ****", action.menuItems)
      action.menuItems.menu_items.forEach((menuItemObj) => {
        newState.allMenuItemsForRest[menuItemObj.id] = menuItemObj
      });
      // console.log("***** in GET_ALL_MENU_ITEMS_FOR_REST newState ****", newState)
      return newState;
    }

    case CREATE_MENU_ITEM_FOR_REST: {
      const newState = { ...state };
      newState.allMenuItemsForRest[action.menuItem.id] = action.menuItem;
      return newState;
    }

    case UPDATE_MENU_ITEM: {
      const newState = { ...state };
      newState.allMenuItemsForRest[action.menuItem.id] = action.menuItem;
      return newState;
    }

    case DELETE_MENU_ITEM: {
      const newState = { ...state };
      delete newState.allMenuItemsForRest[action.groupId];
      return newState;
    }

    default: {
      return state;
    }
  }
};
