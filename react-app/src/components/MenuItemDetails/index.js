import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneMenuItemThunk } from '../../store/menuItems';
import './MenuItemDetails.css';
import { getOneRestaurantThunk } from '../../store/restaurant';

export default function MenuItemDetails() {
  const sessionUser = useSelector(state => state.session.user);
  const { menuItemId } = useParams();
  const menuItemIdAsNum = parseInt(menuItemId);

  const [isLoaded, setIsLoaded] = useState(false)

  const menuItem = useSelector(state => state.menuItems.singleMenuItem ? state.menuItems.singleMenuItem : {}); // {}
  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}

  console.log("***** in MenuItemDetails: sessionUser ****", sessionUser)

  let hideAddButton = true;
  if (sessionUser === null) { // logged out
    hideAddButton = true;
  } else if (sessionUser !== null && sessionUser !== undefined) { // logged in
    hideAddButton = false;
  }

  let hideRemoveButton = true;
  if (sessionUser === null) { // logged out
    hideRemoveButton = true;
  } else if (sessionUser !== null && sessionUser !== undefined) { // logged in
    // TO EDIT: ONCE SHOPPING CART EXISTS
    // LOGIC: ONLY DISPLAY 'REMOVE' BUTTON IF CART HAS ITEMS IN IT
    // ('numCartItems' is just a placeholder/suggested var name)
    // } else if (sessionUser !== null && numCartItems > 0) { // logged in
    hideRemoveButton = false;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMenuItemThunk(menuItemId));
    dispatch(getOneRestaurantThunk(menuItem.restaurantId))
    setIsLoaded(true)
  }, [dispatch, menuItemId]);

  return (
    <>
    { isLoaded &&
      (
      <div className='menu-item-details-outermost-box'>
        <div className='menu-item-details-centering-box'>

          <div>
            ⬅ <Link to={`/restaurants/${menuItem.restaurantId}/menu`}>Back to {restaurant.name ? restaurant.name : ''}</Link>
          </div>

          <div className='menu-item-details-card'>
            <div>
              {menuItem.imageUrl ?
                <img className='menu-item-details-img' src={menuItem.imageUrl}></img>
                : ''
              }
            </div>
            <div className='menu-item-details-info'>
              <div className='menu-item-details-name'>
                {menuItem.name}
              </div>
              <div className='menu-item-details-price'>
                ${menuItem.price}
              </div>
              <div className='menu-item-details-description'>
                {menuItem.description}
              </div>
              <div>
                {hideAddButton ? null :
                  <button className='menu-item-details-add-or-remove-button'>
                    Add to order
                  </button>
                }
              </div>
              <div>
                {hideRemoveButton ? null :
                  <button className='menu-item-details-add-or-remove-button'>
                    Remove from order
                  </button>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      )
    }
    </>
  )
};
