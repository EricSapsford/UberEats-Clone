import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import MenuItemFormCreateModalBtn from '../MenuItemFormCreateModalBtn';
import MenuItemFormCreate from '../MenuItemFormCreate';
import MenuItemCardOwner from '../MenuItemCardOwner';
import './RestaurantDetailsOwner.css';

export default function RestaurantDetailsOwner() {
  // const sessionUser = useSelector(state => state.session.user);
  const { restaurantId } = useParams();
  const restIdAsNum = parseInt(restaurantId);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}
  const menuItemsArr = Object.values(
    useSelector((state) => (state.menuItems.allMenuItemsForRest ? state.menuItems.allMenuItemsForRest : {}))
  );

  // WE NEED THIS PAGE TO LISTEN TO CHANGES TO MENU ITEMS

  useEffect(() => {
    dispatch(getOneRestaurantThunk(restaurantId));
    dispatch(getAllMenuItemsForRestThunk(restaurantId));
    setIsLoaded(true);
  }, [dispatch, restaurantId]);

  return (
    <>
      {isLoaded && (
        <div className='restaurant-outermost-box'>
          <div className='restaurant-centering-box'>
            <div>
              ⬅ <Link to='/account'>Back to my account</Link>
            </div>

            <div className='restaurant-card'>

              <div className='restaurant-info'>
                <div className='restaurant-name'>
                  {restaurant.name ? restaurant.name : ''} | Edit menu
                </div>
                <div>
                  <MenuItemFormCreateModalBtn
                    buttonText="Add Menu Item"
                    modalComponent={<MenuItemFormCreate restIdAsNum={restIdAsNum} />}
                  />
                </div>
              </div>

              <div className='restaurant-menu-items'>
                {menuItemsArr.length ?
                  menuItemsArr.map((menuItem) => (
                    <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                      <MenuItemCardOwner menuItem={menuItem} />
                    </div>
                  ))
                  :
                  "Please add a menu item for your restaurant!"}
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
};
