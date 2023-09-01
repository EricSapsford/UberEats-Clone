import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {

  let priceRangeString = "";
  for (let index = 0; index < restaurant.priceRange; index++) {
    priceRangeString += "$"
  }


  return (
    <div>
      <div id="restaurantWholeDiv">
        <Link to={`/restaurants/${restaurant.id}/menu`}>
          <div id="restaurantImageDiv">
            <img
              className='restCardImage'
              src={restaurant.imageUrl ?
                restaurant.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
              alt="Restaurant Image"
            />
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
        </Link>
      </div>
    </div>
  )
}

export default RestaurantCard;
