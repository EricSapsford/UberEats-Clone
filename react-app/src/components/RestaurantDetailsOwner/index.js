import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import OpenModalButton from '../../components/OpenModalButton';
import MenuItemFormCreate from '../MenuItemFormCreate';
import MenuItemCardOwner from '../MenuItemCardOwner';
import './RestaurantDetailsOwner.css';
import ManageAccount from '../ManageAccount';
import { useAccountView } from '../../context/AccountView';

export default function RestaurantDetailsOwner() {
  const { restaurantId } = useParams();
  const history = useHistory()
  const restIdAsNum = parseInt(restaurantId);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { view, setView } = useAccountView();

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

  useEffect(() => {
    dispatch(getOneRestaurantThunk(restaurantId));
    dispatch(getAllMenuItemsForRestThunk(restaurantId));
    setIsLoaded(true);
  }, [dispatch, restaurantId]);

  const backToAccount = () => {
    setView('manage')
    history.push("/account")
  }

  return (
    <>
      {isLoaded && (
        <div className='restaurant-outermost-box'>
          <div className='restaurant-centering-box'>
          <div>
            {restaurant.imageUrl ?
              <img className='restaurant-banner-image' src={restaurant.imageUrl}></img>
              : ''
            }
          </div>
            <div className='owner-restaurant-card'>
            <div>
              <span className='owner-restaurant-back-to-my-account' onClick={backToAccount}>
                ⬅ Back to my account
              </span>
            </div>
              <div className='restaurant-info'>
                <div className='owner-rest-header-and-add-button'>
                  <span className='owner-rest-add-menu-item-button'>
                    <OpenModalButton
                      buttonText="Add Item"
                      modalComponent={<MenuItemFormCreate restIdAsNum={restIdAsNum} />}
                    />
                  </span>
                  <span className='owner-rest-header'>
                    Edit Menu: {restaurant.name ? restaurant.name : ''}
                  </span>
                </div>
              </div>

              <div className='restaurant-menu-items-sections'>
                <div>
                  {!menuItemsArr.length ?
                    <div className='please-add-item-to-restaurant'>
                      You have no menu items. Please add a menu item to your restaurant!
                    </div>
                    : ''
                  }
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
