import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as restaurantActions from "../../store/restaurant"
import RestaurantForm from "../RestaurantForm";

function RestaurantFormUpdate(restaurantId) {
  const dispatch = useDispatch();

  let id = restaurantId.restaurantId

  const restaurant = useSelector(state => state.restaurant.usersRestaurants[id])

  useEffect(() => {
    dispatch(restaurantActions.getOneRestaurantThunk(id))
  }, [dispatch, restaurant])


  return (
    <>
      <div>
       <RestaurantForm restaurant={restaurant} formType="Update Restaurant" />
      </div>
    </>
  )
}

export default RestaurantFormUpdate
