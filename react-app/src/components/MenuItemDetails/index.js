import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneMenuItemThunk } from '../../store/menuItems';
import './MenuItemDetails.css';
import { getOneRestaurantThunk } from '../../store/restaurant';

export default function MenuItemDetails() {
  const sessionUser = useSelector(state => state.session.user);
  const { menuItemId } = useParams();
  const menuItemIdAsNum = parseInt(menuItemId);

  const menuItem = useSelector(state => state.menuItems.singleMenuItem ? state.menuItems.singleMenuItem : {}); // {}
  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}

  let hideCartButtons = true;
  if (sessionUser === null) { // logged out
    hideCartButtons = true;
  } else if (sessionUser !== null && sessionUser !== undefined) { // logged in
    hideCartButtons = false;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMenuItemThunk(menuItemId));
    dispatch(getOneRestaurantThunk(menuItem.restaurantId))
  }, [dispatch, menuItemId]);

  return (
    <>
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
                <button className='menu-item-details-add-or-remove-button'>
                  Add to order
                </button>
              </div>
              <div>
                <button className='menu-item-details-add-or-remove-button'>
                  Remove from order
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
};
