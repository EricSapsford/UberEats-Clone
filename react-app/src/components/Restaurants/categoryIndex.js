import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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

function RestaurantsByCategoryNav() {

  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsByCategoryThunk(category));
  }, [dispatch, category]);

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}))

  const restStateArr = Object.values(restState.categoryRestaurants)


  return (
    <>
      <div>
        <div>
          <img id='restaurantBannerImg' src="https://i.imgur.com/rP2sDgp.jpg" title="source: imgur.com" />
          <h1>Food near you, so long as you're near Vancouver</h1>
        </div>
        <h1>Explore by category</h1>
        <div className="restaurantCardCatDiv">
          <Link exact to={'/restaurants/'} id='allCatButton'>All</Link>
          {restaurantCatagoryArr.map((cat) => (
            <div key={`${cat}Nav`}>
              <NavLink
                exact to={`/restaurants/${cat}`}
                className='restaurantsCards'
              >
                {cat}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          <h1>{category} Restaurants</h1>
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

export default RestaurantsByCategoryNav
