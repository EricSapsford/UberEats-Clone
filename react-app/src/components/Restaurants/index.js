import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../../store/restaurant"

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


  return (
    <>
      <div>
        <div>
          <h1>Banner Image</h1>
          <h1>Food near you, so long as you're near Vancouver</h1>
        </div>
        <div>
          <h1>Explore by catagory</h1>
          {restaurantCatagoryArr.map((catagory) => (
            <div key={`${catagory}Nav`}>
              <NavLink
                exact to ="/restaurants"
              >
                {catagory}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          <h1>Restaurants</h1>
        </div>
        <div>
          {restStateArr.map((restaurant) => (
            <div key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RestaurantsNav
