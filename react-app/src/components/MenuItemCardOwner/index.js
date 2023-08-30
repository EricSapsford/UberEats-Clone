import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import MenuItemDeleteModalBtn from '../MenuItemDeleteModalBtn';
import MenuItemDeleteModal from '../MenuItemDeleteModal';
import MenuItemFormUpdateModalBtn from '../MenuItemFormUpdateModalBtn';
import MenuItemFormUpdate from '../MenuItemFormUpdate';
import './MenuItemCardOwner.css';

export default function MenuItemCardOwner({ menuItem }) {
  const dispatch = useDispatch();
  const menuItemId = menuItem.id;
  const restaurantId = menuItem.restaurantId;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch])

  return (
    <>
      {isLoaded && (
        <div id='menu-item-owner-card'>
          <div>
            <img id='menu-item-owner-img' src={menuItem.imageUrl}></img>
          </div>
          <div id='menu-item-owner-info'>
            <span id='menu-item-owner-info-col-1'>
              <div id='menu-item-owner-name'>
                {menuItem.name}
              </div>
              <div id='menu-item-owner-price'>
                ${menuItem.price}
              </div>
            </span>
            <span id='menu-item-owner-info-col-2'>
              <MenuItemFormUpdateModalBtn
                buttonText="Update"
                modalComponent={<MenuItemFormUpdate
                  menuItem={menuItem}
                />}
              />
              <MenuItemDeleteModalBtn
                buttonText="Delete"
                modalComponent={<MenuItemDeleteModal
                  menuItemId={menuItemId}
                  restaurantId={restaurantId}
                />}
              />
            </span>
          </div>
        </div>
      )}
    </>
  )
};
