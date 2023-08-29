import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantThunk } from '../../store/restaurant';
import { getAllMenuItemsForRestThunk } from '../../store/menuItems';
import { thunkGetReviews } from '../../store/reviews';
import './RestaurantDetails.css';
import MenuItemCard from '../MenuItemCard';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function RestaurantDetails() {
  // const sessionUser = useSelector(state => state.session.user);
  // const restaurantIdAsNum = parseInt(restaurantId);
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const [avgRating, setAvgRating] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const restaurant = useSelector(state => state.restaurant.singleRestaurant ? state.restaurant.singleRestaurant : {}); // {}
  const menuItemsArr = Object.values(
    useSelector((state) => (state.menuItems.allMenuItemsForRest ? state.menuItems.allMenuItemsForRest : {}))
    );
    const reviews = useSelector(state => state.reviews)
    const reviewList = Object.values(reviews.reviews)


  // console.log("***** in RestDetails: restaurant ****", restaurant)
  // console.log("***** in RestDetails: menuItems ****", menuItems)
  // console.log("***** in RestDetails: menuItemsArr ****", menuItemsArr)



    



  useEffect(() => {
    const sumStars = reviewList.reduce((sum, review) => sum + review.stars, 0);
    setAvgRating(sumStars / reviewList.length);
  }, [reviewList]);

    useEffect(() => {
      dispatch(thunkGetReviews(restaurantId))
      dispatch(getOneRestaurantThunk(restaurantId));
      dispatch(getAllMenuItemsForRestThunk(restaurantId));
      setIsLoaded(true)
    }, [dispatch, restaurantId]);

  return (
    <>
      { isLoaded && (<div className='restaurant-outermost-box'>
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
                <i class="fa-solid fa-star"></i> {avgRating.toFixed(1)} ({reviewList.length} reviews)
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
                  <span></span> • <a className='restaurant-read-reviews' href='#reviewHeader'>Read Reviews</a>
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
            <div>
              <ReviewCard restaurantId={restaurant.id}/>
            </div>

          </div>

        </div>
      </div>)}
    </>
  )
};
