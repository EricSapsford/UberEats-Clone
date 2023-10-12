import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../../store/restaurant";
import RestaurantCard from "./RestaurantCard";
import "./Restaurants.css";
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

function RestaurantsByCategoryNav() {

  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsByCategoryThunk(category));
  }, [dispatch, category]);

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}));

  const restStateArr = Object.values(restState.categoryRestaurants);

  const location = useLocation();

  function scrolltoId() {
    const access = document.getElementById("funId");
    access.scrollIntoView({ behavior: "smooth" });
  };

  let path = "";

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
          <div className='exploreByCategory' id="funId">
            {/* <span ></span> */}
            <h1 id="all">Explore by category</h1>
          </div>

          <div className="restaurantCardCatDiv">
            {/* <Link exact to={'/restaurants/'} id='allCatButton'>All</Link> */}
            {/* <a href = "/restaurants/#all">Your Text</a> */}
            {restaurantCategoryArr.map((cat) => (
              <div key={`${cat}Nav`}>
                <Link
                  {...cat === 'All' ? path = '/restaurants' : cat === 'Fast Food' ? path = '/restaurants/Fast_Food' : path = `/restaurants/${cat}`}

                  exact to={path}
                  className='restCatButtons'
                  onClick={scrolltoId}
                >
                  {cat === 'Fast_Food' ? 'Fast Food' : cat}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1>{category === 'Fast_Food' ? 'Fast Food' : category} Restaurants</h1>
          </div>
          <div className="restaurantCardsDiv">
            {restStateArr ? (restStateArr.map((restaurant) => (
              <div key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))) : (
              <LoadingComponent />
            )}
          </div>
          {/* <div id='rest-back-to-cats'>
            <a href="#all">Back up to categories</a>
          </div> */}
        </div>

      </div>
    </>
  )
};

export default RestaurantsByCategoryNav;
