import React from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../../store/restaurant"
import RestaurantCard from "./RestaurantCard"
import "./Restaurants.css"

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

function RestaurantsByCatagoryNav() {

  const dispatch = useDispatch();
  const { catagory } = useParams();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsByCatagoryThunk(catagory));
  }, [dispatch, catagory]);

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}))

  const restStateArr = Object.values(restState.catagoryRestaurants)


  return (
    <>
      <div>
        <div>
          <img id='restaurantBannerImg' src="https://i.imgur.com/rP2sDgp.jpg" title="source: imgur.com" />
          <h1>Food near you, so long as you're near Vancouver</h1>
        </div>
        <h1>Explore by category</h1>
        <div className="restaurantCardCatDiv">
          {restaurantCatagoryArr.map((cata) => (
            <div key={`${cata}Nav`}>
              <NavLink
                exact to={`/restaurants/${cata}`}
                className='restaurantsCards'
              >
                {cata}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          <h1>{catagory} Restaurants</h1>
        </div>
        <div className="restaurantCardDiv">
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

export default RestaurantsByCatagoryNav
