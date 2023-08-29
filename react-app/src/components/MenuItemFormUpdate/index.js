import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import MenuItemForm from '../MenuItemForm';

export default function MenuItemFormUpdate({ menuItem }) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  if (menuItem.type === "MenuItemEnum.appetizer") {
    menuItem.type = "appetizer"
  } else if (menuItem.type === "MenuItemEnum.entree") {
    menuItem.type = "entree"
  } else if (menuItem.type === "MenuItemEnum.dessert") {
    menuItem.type = "dessert"
  } else if (menuItem.type === "MenuItemEnum.beverage") {
    menuItem.type = "beverage"
  };

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <MenuItemForm
          formType='Update Menu Item'
          menuItem={menuItem}
        />
      )}
    </>
  )
};
