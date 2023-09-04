//================================ IMAGE DEMI-THUNKS =================================

// DEMI-THUNK: CREATE/HOST FILE ON AWS, AND RETURN URL
export const createImageFileAndUrl = (image) => async (dispatch) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("/api/images/create", {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    return data;
};

// DEMI-THUNK: DELETE FILE ON AWS, FOR RESTAURANT
export const deleteImageFileRestaurant = (restaurantId) => async (dispatch) => {

    const res = await fetch(`/api/images/restaurants/${restaurantId}/delete`, {
        method: "DELETE"
    });

    const data = await res.json();
    return data;
};

// DEMI-THUNK: DELETE FILE ON AWS, FOR MENU ITEM
export const deleteImageFileMenuItem = (menuItemId) => async (dispatch) => {

    const res = await fetch(`/api/images/menu-items/${menuItemId}/delete`, {
        method: "DELETE"
    });

    const data = await res.json();
    return data;
};
