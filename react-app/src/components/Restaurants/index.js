import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant"
import './Restaurants.css'

import RestaurantCard from "./RestaurantCard"

const restaurantCatagoryArr = [
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
          <img id='restaurantBannerImg' src="https://i.imgur.com/rP2sDgp.jpg" title="source: imgur.com" />
          <h1>Food near you, so long as you're near Vancouver</h1>
        </div>
        <h1 id="restCats">Explore by category</h1>

        <div>
          <div className="restaurantCardCatDiv">
            <Link exact to={'/restaurants/'} id='allCatButton'>All</Link>
            {restaurantCatagoryArr.map((catagory) => (
              <div key={`${catagory}Nav`}>
                <NavLink
                  {...catagory === 'All' ? path = '/restaurants' : catagory === 'Fast Food' ? path = '/restaurants/Fast_Food' : path = `/restaurants/${catagory}`}
                  exact to={path}
                  className='restaurantsCards'
                >
                  {catagory}
                </NavLink>
              </div>
            ))}
          </div>

          <div>
            <h1>Restaurants</h1>
          </div>
          <div className="restaurantCardDiv">
            {restStateArr.map((restaurant) => (
              <div key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
        <a href="#restCats">Jump To Categories</a>
      </div>
    </>
  )
}

export default RestaurantsNav
