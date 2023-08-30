import { useParams, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as restaurantActions from "../../store/restaurant"
import RestaurantForm from "../RestaurantForm";

function RestaurantFormUpdate(restaurantId) {
  const dispatch = useDispatch();

  let id = restaurantId.restaurantId

  const session = useSelector(state => state.session)
  const restaurant = useSelector(state => state.restaurant.usersRestaurants[id])

  useEffect(() => {
    dispatch(restaurantActions.getOneRestaurantThunk(id))
  }, [dispatch, id])


  return (
    <>
      <div>
       <RestaurantForm restaurant={restaurant} formType="Update Restaurant" />
      </div>
    </>
  )
}

export default RestaurantFormUpdate
