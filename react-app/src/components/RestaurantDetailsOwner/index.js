import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import OpenModalButton from '../../components/OpenModalButton';
import MenuItemFormCreateModalBtn from '../MenuItemFormCreateModalBtn';
import MenuItemFormCreate from '../MenuItemFormCreate';
import MenuItemCardOwner from '../MenuItemCardOwner';
import './RestaurantDetailsOwner.css';

export default function RestaurantDetailsOwner() { // add: { restaurant }
  // const sessionUser = useSelector(state => state.session.user);
  const { restaurantId } = useParams();
  const restIdAsNum = parseInt(restaurantId);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}
  const menuItemsArr = Object.values(
    useSelector((state) => (state.menuItems.allMenuItemsForRest ? state.menuItems.allMenuItemsForRest : {}))
  );

  const appetizersArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.appetizer"
  })
  const entreesArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.entree"
  })
  const dessertsArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.dessert"
  })
  const beveragesArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.beverage"
  })

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

            <div className='owner-restaurant-card'>

              <div className='restaurant-info'>
                <div className='owner-rest-header-and-add-button'>
                  <span className='owner-rest-header'>
                    Edit menu: {restaurant.name ? restaurant.name : ''}
                  </span>
                  <span>
                    <MenuItemFormCreateModalBtn
                      buttonText="Add Item"
                      modalComponent={<MenuItemFormCreate restIdAsNum={restIdAsNum} />}
                    />
                    {/* <span className='add-menu-item-button'>
                      <OpenModalButton
                        style={{ color: 'red' }}
                        buttonText="Add Item"
                        modalComponent={<MenuItemFormCreate restIdAsNum={restIdAsNum} />}
                      />
                    </span> */}
                  </span>
                </div>
              </div>

              <div className='restaurant-menu-items-sections'>
                <div>
                  {!menuItemsArr.length ? <div>Please add a menu item for your restaurant!</div> : ''}
                </div>
                <div>
                  {appetizersArr.length ? <div className='item-type-header'>Appetizers</div> : ''}
                  <div className='menu-item-cards'>
                    {appetizersArr.length ?
                      appetizersArr.map((menuItem) => (
                        <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                          <MenuItemCardOwner menuItem={menuItem} />
                        </div>
                      ))
                      : ''
                    }
                  </div>
                </div>
                <div>
                  {entreesArr.length ? <div className='item-type-header'>Entrees</div> : ''}
                  <div className='menu-item-cards'>
                    {entreesArr.length ?
                      entreesArr.map((menuItem) => (
                        <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                          <MenuItemCardOwner menuItem={menuItem} />
                        </div>
                      )) : ''
                    }
                  </div>
                </div>
                <div>
                  {dessertsArr.length ? <div className='item-type-header'>Desserts</div> : ''}
                  <div className='menu-item-cards'>
                    {dessertsArr.length ?
                      dessertsArr.map((menuItem) => (
                        <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                          <MenuItemCardOwner menuItem={menuItem} />
                        </div>
                      )) : ''
                    }
                  </div>
                </div>
                <div>
                  {beveragesArr.length ? <div className='item-type-header'>Beverages</div> : ''}
                  <div className='menu-item-cards'>
                    {beveragesArr.length ?
                      beveragesArr.map((menuItem) => (
                        <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                          <MenuItemCardOwner menuItem={menuItem} />
                        </div>
                      )) : ''
                    }
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
};
