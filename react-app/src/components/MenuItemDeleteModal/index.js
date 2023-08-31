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
          Delete menu item?
        </div>
        <div>
          <button onClick={closeModal} id='menu-item-cancel-delete-btn'>
            No, keep it
          </button>
        </div>
        <div>
          <button onClick={handleDelete} id='menu-item-confirm-delete-btn'>
            Yes, delete it
          </button>
        </div>
      </div>
    </>
  )
};
