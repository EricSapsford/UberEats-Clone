import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneMenuItemThunk } from '../../store/menuItems';
import './MenuItemDetails.css';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { useShoppingCart } from '../../context/ShoppingCart';


export default function MenuItemDetails() {
  const sessionUser = useSelector(state => state.session.user);
  const { menuItemId } = useParams();
  const menuItemIdAsNum = parseInt(menuItemId);
  const { cart, setCart } = useShoppingCart();

  const [isLoaded, setIsLoaded] = useState(false)

  const menuItem = useSelector(state => state.menuItems.singleMenuItem ? state.menuItems.singleMenuItem : {}); // {}
  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}

  // console.log("***** in MenuItemDetails: sessionUser ****", sessionUser)

  let hideAddButton = true;
  if (sessionUser === null) { // logged out
    hideAddButton = true;
  } else if (sessionUser !== null && sessionUser !== undefined) { // logged in
    hideAddButton = false;
  }

  const itemInCart = (menuItem) => {
    const item = cart.find(thing => thing.id === menuItem.id)

    if (item) {
      return true
    } else {
      return false
    }
  }

  const restaurantInCart = (menuItem) => {
    if (!cart.length) return false;

    const id = cart[0].restaurantId;
    if (menuItem.restaurantId === id) {
      return false
    } else {
      return true
    }
  }

  let hideRemoveButton = true;
  if (sessionUser === null) { // logged out
    hideRemoveButton = true;
  } else if (sessionUser !== null && sessionUser !== undefined) { // logged in
    hideRemoveButton = false;
  }

  const addToCart = (item) => {
    const updatedCart = [...cart, item]
    setCart(updatedCart)
  }

  const removeFromCart = (menuItem) => {
    const updatedCart = []

    cart.forEach(item => {
      if (item.id !== menuItem.id) {
        updatedCart.push(item)
      }
    });

    setCart(updatedCart)
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMenuItemThunk(menuItemId))
      .then((res) => dispatch(getOneRestaurantThunk(res.restaurantId)))
      .then(() => setIsLoaded(true))
  }, [dispatch, menuItemId]);

  return (
    <>
      {isLoaded &&
        (
          <div className='menu-item-details-outermost-box'>
            <div className='menu-item-details-centering-box'>

              <div className='back-restaurants-mi'>
                <Link className='back-restaurants-mi' to={`/restaurants/${menuItem.restaurantId}/menu`}>⬅ Back to {restaurant.name ? restaurant.name : ''}</Link>
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
                    {restaurantInCart(menuItem) ?
                      <>
                        <p>
                          Orders may only be placed from one restaurant at a time.
                        </p>
                        <p>
                          Please complete current order, or empty cart to order from another restaurant.
                        </p>
                      </>
                      :
                      <button className='menu-item-details-add-or-remove-button' onClick={() => addToCart(menuItem)}>
                        Add to order
                      </button>
                    }
                  </div>
                  <div>
                    {itemInCart(menuItem) ? (
                      <button className='menu-item-details-add-or-remove-button' onClick={() => removeFromCart(menuItem)}>
                        Remove from order
                      </button>
                    ) : null
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
