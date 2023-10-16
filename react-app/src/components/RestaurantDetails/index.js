import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import { thunkGetReviews } from '../../store/reviews';
import './RestaurantDetails.css';
import MenuItemCard from '../MenuItemCard';
import ReviewCard from '../ReviewCard/ReviewCard';
import LoadingComponent from '../Loading';
import { thunkGetPastOrders } from '../../store/orders';

export default function RestaurantDetails() {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const [avgRating, setAvgRating] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {});
  const sessionUser = useSelector(state => state.session.user);
  const menuItemsArr = Object.values(
    useSelector((state) => (state.menuItems.allMenuItemsForRest ? state.menuItems.allMenuItemsForRest : {}))
  );
  const reviews = useSelector(state => state.reviews);
  const reviewList = Object.values(reviews.reviews);

  const appetizersArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.appetizer"
  });
  const entreesArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.entree"
  });
  const dessertsArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.dessert"
  });
  const beveragesArr = menuItemsArr.filter(menuItem => {
    return menuItem.type === "MenuItemEnum.beverage"
  });

  useEffect(() => {
    const sumStars = reviewList.reduce((sum, review) => sum + review.stars, 0);
    setAvgRating(sumStars / reviewList.length);
  }, [reviewList]);

  useEffect(() => {
    dispatch(thunkGetReviews(restaurantId))
    dispatch(getOneRestaurantThunk(restaurantId));
    dispatch(getAllMenuItemsForRestThunk(restaurantId));
    if (sessionUser != null) {
      dispatch(thunkGetPastOrders(sessionUser.id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (restaurant.id == restaurantId) {
      setIsLoaded(true)
    }
  }, [restaurant]);

  return (
    <>
      {isLoaded && menuItemsArr ? (<div className='restaurant-outermost-box'>
        <div className='restaurant-centering-box'>
          <div>
            {restaurant.imageUrl ?
              <img className='restaurant-banner-image' src={restaurant.imageUrl}></img>
              : ''
            }
          </div>

          <div className='restaurant-card'>

            <div id='rest-details-back-breadcrumb'>
              <Link id='back-restaurants-rd' to='/restaurants'>⬅ Back to all restaurants</Link>
            </div>

            {reviewList.length ?
              <div className='restaurant-info'>
                <div className='restaurant-name'>
                  {restaurant.name ? restaurant.name : ''}
                </div>
                <div className='restaurant-details'>
                  <span>
                    <i className="fa-solid fa-star"></i> {avgRating.toFixed(1)} ({reviewList.length} reviews)
                  </span>
                  <span>
                    <span></span> •
                    <span></span> {restaurant.category === 'Fast_Food' ? 'Fast Food' : restaurant.category} •
                  </span>
                  <span>
                    {restaurant.priceRange === 1 ? ' $' : ''}
                    {restaurant.priceRange === 2 ? ' $$' : ''}
                    {restaurant.priceRange === 3 ? ' $$$' : ''}
                    {restaurant.priceRange === 4 ? ' $$$$' : ''}
                  </span>
                  <span>
                    <span></span>    <a className='restaurant-read-reviews' href='#reviewHeader'>Read Reviews</a>
                  </span>
                </div>
              </div>
              :
              <div className='restaurant-info'>
                <div className='restaurant-name'>
                  {restaurant.name ? restaurant.name : ''}
                </div>
                <div className='restaurant-details'>
                  <span>
                    0 Reviews
                  </span>

                  <span>
                    <span></span> • {restaurant.category === 'Fast_Food' ? 'Fast Food' : restaurant.category}
                  </span>
                  <span>
                    <span></span> • <span></span>
                    {restaurant.priceRange === 1 ? '$' : ''}
                    {restaurant.priceRange === 2 ? '$$' : ''}
                    {restaurant.priceRange === 3 ? '$$$' : ''}
                    {restaurant.priceRange === 4 ? '$$$$' : ''}
                  </span>
                </div>
              </div>}


            <div className='restaurant-menu-items-sections'>
              <div>
                {appetizersArr.length ? <div className='item-type-header'>Appetizers</div> : ''}
                <div className='menu-item-cards'>
                  {appetizersArr.length ?
                    appetizersArr.map((menuItem) => (
                      <div className='restaurant-menu-item-card-holder' key={menuItem.id}>
                        <MenuItemCard menuItem={menuItem} />
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
                        <MenuItemCard menuItem={menuItem} />
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
                        <MenuItemCard menuItem={menuItem} />
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
                        <MenuItemCard menuItem={menuItem} />
                      </div>
                    )) : ''
                  }
                </div>
              </div>
            </div>
            <div>
              <ReviewCard restaurantId={restaurant.id} />
            </div>

          </div>

        </div>
      </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  )
};
