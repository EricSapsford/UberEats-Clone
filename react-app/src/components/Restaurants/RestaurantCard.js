import React from "react";
import { NavLink } from "react-router-dom";

function RestaurantCard({ restaurant }) {

  let priceRangeString = "";
  for (let index = 0; index < restaurant.priceRange; index++) {
    priceRangeString += "$"
  }


  return (
    <div>
      <div id="restaurantWholeDiv">
        <NavLink to={`/restaurants/${restaurant.id}/menu`}>
          <div id="restaurantImageDiv">
            <img className='restaurantImage' src={restaurant.imageUrl ? restaurant.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt="Restaurant Image" />
          </div>
          <div>
            <div id="restaurantNameDiv">
              {restaurant.name}
            </div>
            <div id="restaurantCategoryPriceDiv">
              {restaurant.category === 'Fast_Food' ? 'Fast Food' : restaurant.category} • {priceRangeString}
              
            </div>
            <div id="restaurantAddressDiv">
              {restaurant.streetAddress}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default RestaurantCard;
