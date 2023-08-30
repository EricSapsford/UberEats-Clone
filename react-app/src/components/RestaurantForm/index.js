import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant"
import { createRestaurantThunk } from "../../store/restaurant";

// restaurantActions.createRestaurantThunk(restaurant)


function RestaurantForm({ restaurant, formType }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();

  const [name, setName] = useState(restaurant?.name)
  const [streetAddress, setStreetAddress] = useState(restaurant?.streetAddress)
  const [category, setCategory] = useState(restaurant?.category)
  const [priceRange, setPriceRange] = useState(restaurant?.priceRange)
  const [imageUrl, setImageUrl] = useState(restaurant?.imageUrl)

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();


    restaurant = {
      ...restaurant,
      name,
      streetAddress,
      category,
      priceRange,
      imageUrl,
      restaurantId: restaurant.id
    }



    if (formType == "Create Restaurant") {

      try {
        const res = await dispatch(createRestaurantThunk(restaurant));
        console.log("INSIDE CREATE RESTAURANT TRY BLOCK - RES", res)
        if (res.restaurant.id) {
          setErrors({});
          console.log("ID", res.restaurant.id)
          history.push(`restaurants/${res.restaurant.id}/menu/manage`);
        } else {
          return res;
        }
      } catch(res) {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      }
    } else if (formType == "Update Restaurant") {

      try {
        const res = await dispatch(restaurantActions.updateRestaurantThunk(restaurant));
        // console.log("INSIDE UPDATE RESTAURANT TRY BLOCK - RES", res)
        if (res.id) {
          setErrors({});
        } else {
          return res;
        }
      } catch(res) {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          {formType === "Create Restaurant" ? <h1>Create Restaurant</h1> : <h1>Update Restaurant</h1>}
        </div>

        { formType === "Create Restaurant" ?
          <div>
            <h2>Tell us a bit about your Restaurant</h2>
          </div>
          : null
        }

        {/* NAME */}
        <div>
          <div>
          { formType === "Create Restaurant" ?
            <h3>What is your Restaurant's name?</h3>
            : null
          }
            <input
              size={40}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              required
            />
          </div>
          {errors.name && (<div className="errorsDiv">{errors.name}</div>)}
        </div>

        {/* ADDRESS */}
        <div>
          <div>
            { formType === "Create Restaurant" ?
              <h3>What is your Restaurant's street address?</h3>
              : null
            }
            <input
              size={40}
              type="text"
              name="streetAddress"
              onChange={(e) => setStreetAddress(e.target.value)}
              value={streetAddress}
              placeholder="Address"
              required
            />
          </div>
          {errors.streetAddress && (<div className="errorsDiv">{errors.streetAddress}</div>)}
        </div>

        {/* CATEGORY */}
        <div>
          <div>
            { formType === "Create Restaurant" ?
              <h3>What Category best describes your Restaurant's cuisine?</h3>
              : null
            }
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="(select one)">
                (select one)
              </option>
              <option key="Mexican" value={"Mexican"}>Mexican</option>
              <option key="Indian" value={"Indian"}>Indian</option>
              <option key="Japanese" value={"Japanese"}>Japanese</option>
              <option key="Bistro" value={"Bistro"}>Bistro</option>
              <option key="French" value={"French"}>French</option>
              <option key="Italian" value={"Italian"}>Italian</option>
              <option key="Thai" value={"Thai"}>Thai</option>
              <option key="Fast Food" value={"Fast_Food"}>Fast Food</option>
              <option key="Mediterranean" value={"Mediterranean"}>Mediterranean</option>
              <option key="Vegetarian" value={"Vegetarian"}>Vegetarian</option>
            </select>
          </div>
          {errors.category && (<div className="errorsDiv">{errors.category}</div>)}
        </div>

        {/* PRICE RANGE */}
        <div>
          <div>
            { formType === "Create Restaurant" ?
              <legend>What price range best characterizes your Restaurant?</legend>
              : null
            }
            <div>
              <input
                type="radio"
                id="$"
                name="priceRange"
                value={1}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <label for="$">$</label>
            </div>

            <div>
              <input
                type="radio"
                id="$$"
                name="priceRange"
                value={2}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <label for="$$">$$</label>
            </div>

            <div>
              <input
                type="radio"
                id="$$$"
                name="priceRange"
                value={3}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <label for="$$$">$$$</label>
            </div>

            <div>
              <input
                type="radio"
                id="$$$$"
                name="priceRange"
                value={4}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <label for="$$$$">$$$$</label>
            </div>

          </div>
          {errors.priceRange && (<div className="errorsDiv">{errors.priceRange}</div>)}
        </div>

        {/* IMAGEURL */}
        <div>
          <div>
            <input
              size={40}
              type="url"
              name="imageUrl"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              placeholder="Image URL"
              required
            />
          </div>
          {errors.imageUrl && (<div className="menu-item-create-error-text">{errors.  imageUrl}</div>)}
        </div>

        {/* BUTTON */}
        <div>
          <button disabled={disabled}>
            {formType === "Create Restaurant" ? "Next" : "Update"}
          </button>
        </div>

      </form>
      {formType === "Update Restaurant" ? <button>Cancel</button> : null }
    </>
  )
}

export default RestaurantForm
