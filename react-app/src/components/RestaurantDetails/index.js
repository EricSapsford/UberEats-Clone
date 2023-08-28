import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import './RestaurantDetails.css';
import MenuItemCard from '../MenuItemCard';

export default function RestaurantDetails() {
  // const sessionUser = useSelector(state => state.session.user);
  const { restaurantId } = useParams();
  // const restaurantIdAsNum = parseInt(restaurantId);

  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}
  const menuItemsArr = Object.values(
    useSelector((state) => (state.menuItems.allMenuItemsForRest ? state.menuItems.allMenuItemsForRest : {}))
  );

  // console.log("***** in RestDetails: restaurant ****", restaurant)
  // console.log("***** in RestDetails: menuItems ****", menuItems)
  // console.log("***** in RestDetails: menuItemsArr ****", menuItemsArr)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneRestaurantThunk(restaurantId));
    dispatch(getAllMenuItemsForRestThunk(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <>
      <div className='restaurant-outermost-box'>
        <div className='restaurant-centering-box'>

          {/* <div>
            ⬅ <Link to='/restaurants'>Back to all restaurants</Link>
          </div> */}

          <div className='restaurant-card'>

            <div>
              {restaurant.imageUrl ?
                <img className='restaurant-banner-image' src={restaurant.imageUrl}></img>
                : ''
              }
            </div>

            <div className='restaurant-info'>
              <div className='restaurant-name'>
                {restaurant.name ? restaurant.name : ''}
              </div>
              <div className='restaurant-details'>
                <span>
                  ★ 4.8 (100+ ratings)
                </span>
                <span>
                  <span></span> • {restaurant.category ? restaurant.category : ''}
                </span>
                <span>
                  <span></span> • <span></span>
                  {restaurant.priceRange === 1 ? '$' : ''}
                  {restaurant.priceRange === 2 ? '$$' : ''}
                  {restaurant.priceRange === 3 ? '$$$' : ''}
                  {restaurant.priceRange === 4 ? '$$$$' : ''}
                </span>
                <span>
                  <span></span> • <span className='restaurant-read-reviews'>Read Reviews</span>
                </span>
                {/* <span>
                  • More Info
                </span> */}
              </div>
            </div>

            <div className='restaurant-menu-items'>
              {menuItemsArr.length ?
                menuItemsArr.map((menuItem) => (
                  <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                    <MenuItemCard menuItem={menuItem} />
                  </div>
                ))
                : ''}
            </div>

          </div>

        </div>
      </div>
    </>
  )
};
