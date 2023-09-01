import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import RestaurantFormUpdate from "../RestaurantFormUpdate";
import { useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import RestaurantDeleteModal from "../RestaurantDeleteModal";
import { useAccountView } from "../../context/AccountView";

function UserRestaurantCard({ restaurant }) {
  const history = useHistory();
  const { setView } = useAccountView();

  let priceRangeString = "";
  for (let index = 0; index < restaurant.priceRange; index++) {
    priceRangeString += "$"
  }

  const currentRestCard = useSelector(state => state.restaurant.usersRestaurants[restaurant.id])

  useEffect(() => {
    setUserCardScrollToggle(true);
    setEditRestaurantToggle(false);
  }, [currentRestCard])

  const [editRestaurantToggle, setEditRestaurantToggle] = useState(false)
  const [editMenuToggle, setEditMenuToggle] = useState(false)
  const [userCardScrollToggle, setUserCardScrollToggle] = useState(true)


  const editRestaurant = (e) => {
    setEditRestaurantToggle(true);
    setUserCardScrollToggle(false);
  }

  const editMenu = (e) => {
    history.push(`restaurants/${restaurant.id}/menu/manage`
    );
    // setView('menu')
  }



  return (
    <>
    { userCardScrollToggle ?
      <div>
        <div>
          <NavLink to={`/restaurants/${restaurant.id}/menu`}>
            <div>
              <img className='restaurantImage' src={restaurant.imageUrl ? restaurant.imageUrl : "https:upload.  wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholdesvg"}   alt="Restaurant Image" />
            </div>
            <div>
              <div>
                {restaurant.name}
              </div>
              {/* <div>
                {restaurant.avgRating}
              </div> */}
              <div>
                {restaurant.category}
              </div>
              {priceRangeString}
              <div>
              </div>
              <div>
                {restaurant.streetAddress}
              </div>
            </div>
          </NavLink>
          <button onClick={editRestaurant}>Edit Restaurant</button>
          <button onClick={editMenu}>Edit Menu</button>
          <div>
            <OpenModalButton
              // className=""
              buttonText="Delete"
              modalComponent={<RestaurantDeleteModal restaurantId={restaurant.id} />}
            />
          </div>
        </div>
      </div> : null}
    { editRestaurantToggle ? <RestaurantFormUpdate restaurantId={restaurant.id} /> : null}
    </>
  )
}

export default UserRestaurantCard;
