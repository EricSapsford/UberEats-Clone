import React from "react";
import { NavLink } from "react-router-dom";

function UserRestaurantCard({ restaurant }) {

  let priceRangeString = "";
  for (let index = 0; index < restaurant.priceRange; index++) {
    priceRangeString += "$"
  }


  return (
    <div>
      <div>
        <NavLink to={`/restaurants/${restaurant.id}/menu`}>
          <div>
            <img src={restaurant.imageUrl ? restaurant.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt="Restaurant Image" />
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
            <div>
            <NavLink to={`/restaurants/${restaurant.id}/update`}>
              Edit Restaurant
            </NavLink>
            </div>
            <div>
            <NavLink to={`/restaurants/${restaurant.id}/menu/view`}>
              Edit Menu
            </NavLink>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default UserRestaurantCard;
