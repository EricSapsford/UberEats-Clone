import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../../store/restaurant"

import UserRestaurantCard from "./userRestaurantCard";


function CurrentUserRestaurants() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantActions.getAllRestaurantsByCurrentUserThunk());
  }, [dispatch])

  const restState = useSelector((state) => (state.restaurant ? state.restaurant : {}))

  const restStateArr = Object.values(restState.usersRestaurants)


  return (
    <>
      <div>
        <div>
          <h1>Your Restaurants</h1>
        </div>
        <div>
          {restStateArr.map((restaurant) => (
            <div key={restaurant.id}>
              <UserRestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CurrentUserRestaurants
