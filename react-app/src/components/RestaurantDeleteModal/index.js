import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteImageFileRestaurant } from "../../store/image";
import * as restaurantActions from "../../store/restaurant"

function RestaurantDeleteModal({ restaurantId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [errors, setErrors] = useState({});

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const resDeleteImg = await dispatch(deleteImageFileRestaurant(restaurantId));
      const res = await dispatch(restaurantActions.deleteRestaurantThunk(restaurantId));
      // console.log("HANDLE DELETE RES", res)
      if (resDeleteImg.message && res.message) {
        setErrors({});
        closeModal();
      }
    } catch (res) {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }
  }

  return (
    <>
      <div>
        <div>
          Are you sure you want to delete this restaurant?
        </div>
        <button onClick={closeModal}>
          No, keep restaurant
        </button>
        <button onClick={handleDelete}>
          Yes, delete restaurant
        </button>
      </div>
    </>
  )
}

export default RestaurantDeleteModal
