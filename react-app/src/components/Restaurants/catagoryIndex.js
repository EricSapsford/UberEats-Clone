import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../../store/restaurant"
import RestaurantCard from "./RestaurantCard"
import "./Restaurants.css"

const restaurantCatagoryArr = [
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

function RestaurantsByCatagoryNav() {

  const dispatch = useDispatch();
  const { catagory } = useParams();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsByCatagoryThunk(catagory));
  }, [dispatch, catagory]);

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}))

  const restStateArr = Object.values(restState.catagoryRestaurants)

  const location = useLocation();

  function scrolltoId() {
    const access = document.getElementById("funId");
    access.scrollIntoView({ behavior: "smooth" });
  }

  let path = ""

  return (
    <>
      <div>
        <div>
          <img
            id='restaurantBannerImg'
            src="https://i.imgur.com/rP2sDgp.jpg"
            title="source: imgur.com"
          />
          {/* <h1>Food near you, so long as you're near Vancouver</h1> */}
        </div>

        <div className="restaurantsContent">
          <div className='exploreByCategory' id="funId">
            {/* <span ></span> */}
            <h1 id="restCats">Explore by category</h1>
          </div>

          <div className="restaurantCardCatDiv">
            {/* <Link exact to={'/restaurants/'} id='allCatButton'>All</Link> */}
            {/* <a href = "/restaurants/#restCats">Your Text</a> */}
            {restaurantCatagoryArr.map((cata) => (
              <div key={`${cata}Nav`}>
                <Link
                  {...cata === 'All' ? path = '/restaurants' : cata === 'Fast Food' ? path = '/restaurants/Fast_Food' : path = `/restaurants/${cata}`}

                  exact to={path}
                  className='restCatButtons'
                  onClick={scrolltoId}
                >
                  {cata === 'Fast_Food' ? 'Fast Food' : cata}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1>{catagory === 'Fast_Food' ? 'Fast Food' : catagory} Restaurants</h1>
          </div>
          <div className="restaurantCardDiv">
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
    </>
  )
}

export default RestaurantsByCatagoryNav
