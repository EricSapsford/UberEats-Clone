import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant"
import './Restaurants.css'

import RestaurantCard from "./RestaurantCard"

const restaurantCategoryArr = [
  'Mexican',
  'Indian',
  'Japanese',
  'Bistro',
  'French',
  'Italian',
  'Thai',
  'Fast Food',
  'Mediterranean',
  'Vegetarian',
];

function RestaurantsNav() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsWithOneMenuItemThunk());
  }, [dispatch])

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}))

  const restStateArr = Object.values(restState.allRestaurants)

  let path = ''


  return (
    <>
      <div>
        <div>
          <img
            id='restaurantBannerImg'
            src="https://i.imgur.com/rP2sDgp.jpg"
          />
          {/* <h1>Food near you, so long as you're near Vancouver</h1> */}
        </div>

        <div className="restaurantsContent">
          <div className='exploreByCategory'>
            <h1 id="restCats">Explore by category</h1>
          </div>

          <div>
            <div className="restaurantCardCatDiv">
              <span>
                <Link exact to={'/restaurants'} id='allCatButton'>
                  All
                </Link>
              </span>
              {restaurantCategoryArr.map((category) => (
                <span key={`${category}Nav`}>
                  <Link
                    {...category === 'All' ? path = '/restaurants' : category === 'Fast Food' ? path = '/restaurants/Fast_Food' : path = `/restaurants/${category}`}
                    exact to={path}
                    className='restCatButtons'
                  >
                    {category}
                  </Link>
                </span>
              ))}
            </div>

            <div className="restCatHeader">
              <h1>All Restaurants</h1>
            </div>
            <div className="restaurantCardsDiv">
              {restStateArr.map((restaurant) => (
                <div key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
            <div id='rest-back-to-cats'>
              <a href="#restCats">Back up to categories</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default RestaurantsNav
