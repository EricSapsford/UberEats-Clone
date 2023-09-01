import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RestaurantFormUpdate from "../RestaurantFormUpdate";
import { useSelector, useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import RestaurantDeleteModal from "../RestaurantDeleteModal";
import { thunkGetReviews } from '../../store/reviews';
import "./UserRestaurantCard.css"

function UserRestaurantCard({ restaurant }) {
  const history = useHistory();
  const dispatch = useDispatch();

  let priceRangeString = "";
  for (let index = 0; index < restaurant.priceRange; index++) {
    priceRangeString += "$"
  }

  const currentRestCard = useSelector(state => state.restaurant.usersRestaurants[restaurant.id])
  const reviews = useSelector(state => state.reviews)
  const reviewList = Object.values(reviews.reviews)


  useEffect(() => {
    setUserCardScrollToggle(true);
    setEditRestaurantToggle(false);
  }, [currentRestCard])


  const [editRestaurantToggle, setEditRestaurantToggle] = useState(false)
  const [userCardScrollToggle, setUserCardScrollToggle] = useState(true)


  const editRestaurant = (e) => {
    setEditRestaurantToggle(true);
    setUserCardScrollToggle(false);
  }

  const editMenu = (e) => {
    history.push(`restaurants/${restaurant.id}/menu/manage`
    );
  }

  const detailPage = (e) => {
    history.push(`/restaurants/${restaurant.id}/menu`)
  }



  return (
    <>
    { userCardScrollToggle ?
      <div className="restaurant-card-top-div">
        <div>
          <div className="restaurant-card-details-container-div">

            <div>
              <img className='restaurantImage' src={restaurant.imageUrl ? restaurant.imageUrl : "https:upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholdesvg"}   alt="Restaurant Image" />
            </div>

            <div className="restaurant-card-details-parent-div">

              <div>
                <span className="restaurant-card-name">{restaurant.name}</span>
                <span className="restaurant-card-avgRating">
                <i class="fa-solid fa-star"></i>
                </span>
              </div>

              <div className="restaurant-card-cat-price">
                <span>
                {restaurant.category === "Fast_Food" ? "Fast Food" : restaurant.category}
                </span>
                <span>
                ·
                </span>
                <span>
                  {priceRangeString}
                </span>

              </div>

              <div className="restaurant-card-streetAddress">
                {restaurant.streetAddress}
              </div>

              <div className="restaurant-card-button-div">
              <button onClick={editRestaurant}>Edit Restaurant</button>
              <button onClick={editMenu}>Edit Menu</button>
              <OpenModalButton
                // className=""
                buttonText="Delete"
                modalComponent={<RestaurantDeleteModal restaurantId={restaurant.id} />}
              />
              <button onClick={detailPage}>Go To Restaurant Page</button>
              </div>

            </div>
          </div>
        </div>
      </div> : null}
    { editRestaurantToggle ? <RestaurantFormUpdate restaurantId={restaurant.id} /> : null}
    </>
  )
}

export default UserRestaurantCard;
