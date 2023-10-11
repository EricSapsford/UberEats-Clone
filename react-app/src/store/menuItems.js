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
    const menuItem = await res.json();
    dispatch(getOneMenuItem(menuItem));
    return menuItem; // added
  } else {
    const errors = await res.json();
    return errors;
  };
};

// THUNK: GET ALL MENU ITEMS FOR A RESTAURANT
export const getAllMenuItemsForRestThunk = (restaurantId) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${restaurantId}/menu`, { method: "GET" });

  if (res.ok) {
    const menuItems = await res.json();
    dispatch(getAllMenuItemsForRest(menuItems));
  } else {
    // console.log("***** in getAllMenuItemsForRestThunk: RES NOT OK ****")
    const errors = await res.json();
    // console.log("***** in getAllMenuItemsForRestThunk: errors ****", errors)
    return errors;
  };
};

// THUNK: CREATE MENU ITEM FOR A RESTAURANT
export const createMenuItemForRestThunk = (menuItem) => async (dispatch) => {
  const { name, type, price, description, imageUrl, restaurantId } = menuItem;

  const res = await fetch(`/api/restaurants/${restaurantId}/menu/new`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      type,
      price,
      description,
      image_url: imageUrl,
      restaurant_id: restaurantId
    })
  })

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(createMenuItemForRest(menuItem));
    return menuItem; // added
  } else {
    const errors = await res.json();
    return errors;
  }
  // if (res.ok) {
  //   const data = await res.json();
  //   console.log('*** in createMenuItemForRestThunk res OK: DATA ***', data)
  //   if (res.errors) {
  //     const errors = await res.json();
  //     // console.log('*** in createMenuItemForRestThunk res NOT OK: errors ***', errors)
  //     return errors;
  //   } else if (res.id) {
  //     dispatch(createMenuItemForRest(data));
  //     return data; // added
  //   }
  // } else {
  //   const errors = await res.json();
  //   // console.log('*** in createMenuItemForRestThunk res NOT OK: errors ***', errors)
  //   return errors;
  // }
};

// THUNK: UPDATE MENU ITEM
export const updateMenuItemThunk = (menuItem) => async (dispatch) => {
  const { name, type, price, description, imageUrl, id } = menuItem;

  const res = await fetch(`/api/menu-items/${id}/update`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      type,
      price,
      description,
      image_url: imageUrl
    })
  })

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(updateMenuItem(menuItem));
    return menuItem;
  } else {
    const errors = await res.json();
    return errors;
  }
};

// THUNK: DELETE MENU ITEM
export const deleteMenuItemThunk = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menu-items/${menuItemId}/delete`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  })

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
      action.menuItems.menu_items.forEach((menuItemObj) => {
        newState.allMenuItemsForRest[menuItemObj.id] = menuItemObj
      });
      return newState;
    }

    case CREATE_MENU_ITEM_FOR_REST: {
      const newState = { ...state };
      newState.allMenuItemsForRest[action.menuItem.id] = action.menuItem;
      return newState;
    }

    case UPDATE_MENU_ITEM: {
      const newState = { ...state, singleMenuItem: {} };
      newState.allMenuItemsForRest[action.menuItem.id] = action.menuItem;
      return newState;
    }

    case DELETE_MENU_ITEM: {
      const newState = { ...state, singleMenuItem: {}, allMenuItemsForRest: { ...state.allMenuItemsForRest } };
      delete newState.allMenuItemsForRest[action.menuItemId];
      return newState;
    }

    default: {
      return state;
    }
  }
};
