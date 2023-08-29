import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./MenuItemDeleteModal.css";
import { deleteMenuItemThunk } from "../../store/menuItems";

export default function MenuItemDeleteModal({ menuItemId, restaurantId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(deleteMenuItemThunk(menuItemId));
      if (res.message) {
        closeModal();
      }
    } catch {
    }
  }

  return (
    <>
      <div id='menu-item-delete-modal-outermost-box'>
        <div id='menu-item-delete-modal-text'>
          Are you sure you want to delete this menu item?
        </div>
        <button onClick={closeModal}>
          No, keep menu item
        </button>
        <button onClick={handleDelete}>
          Yes, delete menu item
        </button>
      </div>
    </>
  )
};
