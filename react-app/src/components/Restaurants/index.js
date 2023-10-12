import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant";
import './Restaurants.css';

import RestaurantCard from "./RestaurantCard";
import LoadingComponent from "../Loading";

const restaurantCategoryArr = [
  'All',
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

  const [category, setCategory] = useState('All')

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsWithOneMenuItemThunk());
  }, [dispatch]);

  useEffect(() => {
    if (category === 'Fast Food') {
      dispatch(restaurantActions.getAllRestaurantsByCategoryThunk('Fast_Food'))
    }
    if (category !== 'All' && category !== 'Fast Food') {
      dispatch(restaurantActions.getAllRestaurantsByCategoryThunk(category))
    }
  }, [category])

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}));
  const restStateArr = Object.values(restState.allRestaurants);
  const categoryStateArr = Object.values(restState.categoryRestaurants)

  let path = '';

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
            <h1 id="all">Explore by category</h1>
          </div>

          <div>
            <div className="restaurantCardCatDiv">
              {/* <span>
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
              ))} */}
              {restaurantCategoryArr.map((cat) => (
                  <button className={category === cat ? 'cat-active' : 'cat-button'} onClick={() => setCategory(cat)}>
                    {cat}
                  </button>
              ))}
            </div>

            <div className="restCatHeader">
              <h1>{category} Restaurants</h1>
            </div>
            <div className="restaurantCardsDiv">
              {category === 'All' ? (
                restStateArr ? (restStateArr.map((restaurant) => (
                  <div key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} />
                  </div>
                ))) : (
                  <LoadingComponent />
                )
              ) : (
                categoryStateArr ? (categoryStateArr.map((restaurant) => (
                  <div key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} />
                  </div>
                ))) : (
                  <LoadingComponent />
                )
              )}
            </div>
            <div id='rest-back-to-cats'>
              <a href="#all">Back up to categories</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default RestaurantsNav;
