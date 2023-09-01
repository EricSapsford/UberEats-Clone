import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant"
import { createRestaurantThunk } from "../../store/restaurant";
import { getImageUrl, deleteImageUrl } from "../../store/image"
import "./RestaurantFormCreate.css"
import "./RestaurantFormUpdate.css"

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
  const [newImageToggle, setNewImageToggle] = useState(false)

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleCancel = async (e) => {
    e.preventDefault();


    restaurant = {
      ...restaurant,
      restaurantId: restaurant.id
    }

    try {
      const res = await dispatch(restaurantActions.updateRestaurantThunk(restaurant));
      // console.log("INSIDE UPDATE RESTAURANT TRY BLOCK - RES", res)
      {res.errors ? setErrors(res.errors) : setErrors([]);}
      if (res.restaurant.id) {
        setErrors([]);
      } else {
        return res
      }
    } catch(res) {
      // const data = await res.json();
      // if (data && data.errors) {
      //   setErrors(data.errors);
      // }
      const data = res
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType  === "Create Restaurant") {
      try {
        const res = await dispatch(getImageUrl(imageUrl))
        {res.errors ? setErrors(res.errors) : setErrors([]);}

        if (!res.errors) {
          setImageUrl(res)
        }
      } catch (res) {
        return res
      }
    } else if (formType === "Update Restaurant" && newImageToggle) {
      try {
        const deleteImage = await dispatch(deleteImageUrl())
        if (deleteImage.message) {
          const res = await dispatch(getImageUrl(imageUrl))
          {res.errors ? setErrors(res.errors) : setErrors([]);}

          if (!res.errors) {
            setImageUrl(res)
          }
        } else if (deleteImage.errors) {
          setErrors(deleteImage.errors)
        }
      } catch (res) {
        return res
      }
    }

    restaurant = {
      ...restaurant,
      name,
      streetAddress,
      category,
      imageUrl,
      priceRange,
      restaurantId: restaurant.id
    }

    if (formType === "Create Restaurant") {

      try {
        console.log("DATA BEING SENT OUT", restaurant)
        const res = await dispatch(createRestaurantThunk(restaurant));
        // console.log("INSIDE CREATE RESTAURANT TRY BLOCK - RES", res)
        {res.errors ? setErrors(res.errors) : setErrors([]);}
        if (res.restaurant.id) {
          setErrors([]);
          // console.log("ID", res.restaurant.id)
          history.push(`restaurants/${res.restaurant.id}/menu/manage`);
        } else {
          return res
        }
      } catch(res) {
        // const data = await res.json();
        // if (data && data.errors) {
        //   setErrors(data.errors);
        // }
        const data = res
        if (data && data.errors) {
          setErrors(data.errors);
        }
      }
    } else if (formType == "Update Restaurant") {

      try {
        const res = await dispatch(restaurantActions.updateRestaurantThunk(restaurant));
        // console.log("INSIDE UPDATE RESTAURANT TRY BLOCK - RES", res)
        {res.errors ? setErrors(res.errors) : setErrors([]);}
        if (res.restaurant.id) {
          setErrors([]);
        } else {
          return res
        }
      } catch(res) {
        // const data = await res.json();
        // if (data && data.errors) {
        //   setErrors(data.errors);
        // }
        const data = res
        if (data && data.errors) {
          setErrors(data.errors);
        }
      }
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

      {formType === "Create Restaurant" ?
        <div className='create-menu-item-form-section'>
          <div className='menu-item-form-top-header'>
            Create Restaurant
          </div>
        </div>
       : null}

        {/* { formType === "Create Restaurant" ?
          <div>
            <h2>Tell us a bit about your Restaurant</h2>
          </div>
          : null
        } */}

        <div className={formType === "Update Restaurant" ? "update-restaurant-flex-div" : null}>
        {/* IMAGE IF UPDATE */}
        { formType === "Update Restaurant" ?
          <div>
            <img className='restaurantImage' src={restaurant.imageUrl ? restaurant.imageUrl : "https:upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholdesvg"}   alt="RestauImage" />
          </div>
        : null}

        <div >
        <div className={formType === "Update Restaurant" ? "update-restaurant-button-parent-div" : null}>
        {/* NAME */}
        <div>
          {/* <div className='menu-item-form-top-header'>
          { formType === "Create Restaurant" ?
            "What is your Restaurant's name?"
            : null
          }
          </div> */}
          <div>
            <input
              className={formType === "Create Restaurant" ? "create-restaurant-input" : "update-restaurant-input-name"}
              type="text"
              name="name"
              size={57}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              required
            />
          </div>
          {errors.name && (<div className="errorsDiv">{errors.name}</div>)}
        </div>

        <div className={formType === "Update Restaurant" ? "update-restaurant-cat-address-div" : null}>
        {/* CATEGORY */}
        <div>
          <div>
            {/* { formType === "Create Restaurant" ?
              <h3>What Category best describes your Restaurant's cuisine?</h3>
              : null
            } */}
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className={formType === "Create Restaurant" ? "create-restaurant-select" : "update-restaurant-select"}
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
          <div className={formType === "Create Restaurant" ? "create-restaurant-radio" : "update-restaurant-radio"}>
          <fieldset className={formType === "Create Restaurant" ? "create-restaurant-radio-fieldset" : "update-restaurant-radio-fieldset"}>
            { formType === "Create Restaurant" ?
              <legend>What price range best characterizes your Restaurant?</legend>
              : null
            }

          <div>
            <input
              className="restaurant-form-radio-input"
              type="radio"
              id="$"
              name="priceRange"
              value={1}
              onChange={(e) => setPriceRange(e.target.value)}
              defaultChecked={formType === "Update Restaurant" && priceRange === 1}
            />
            <label htmlFor="$">$</label>
          </div>
          <div>
            <input
              className="restaurant-form-radio-input"
              type="radio"
              id="$$"
              name="priceRange"
              value={2}
              onChange={(e) => setPriceRange(e.target.value)}
              defaultChecked={formType === "Update Restaurant" && priceRange === 2}
            />
            <label htmlFor="$$">$$</label>
          </div>
          <div>
            <input
              className="restaurant-form-radio-input"
              type="radio"
              id="$$$"
              name="priceRange"
              value={3}
              onChange={(e) => setPriceRange(e.target.value)}
              defaultChecked={formType === "Update Restaurant" && priceRange === 3}
            />
            <label htmlFor="$$$">$$$</label>
          </div>
          <div>
            <input
              className="restaurant-form-radio-input"
              type="radio"
              id="$$$$"
              name="priceRange"
              value={4}
              onChange={(e) => setPriceRange(e.target.value)}
              defaultChecked={formType === "Update Restaurant" && priceRange === 4}
            />
            <label htmlFor="$$$$">$$$$</label>
          </div>
          </fieldset>
          {errors.priceRange && (<div className="errorsDiv">{errors.priceRange}</div>)}
        </div>
        </div>

        {/* ADDRESS */}
        <div>
          {/* <div className='menu-item-form-top-header'>
            { formType === "Create Restaurant" ?
              "What is your Restaurant's street address?"
              : null
            }
          </div> */}
          <div>
            <input
              className={formType === "Create Restaurant" ? "create-restaurant-input" : "update-restaurant-input-address"}
              type="text"
              size={57}
              name="streetAddress"
              onChange={(e) => setStreetAddress(e.target.value)}
              value={streetAddress}
              placeholder="Address"
              required
            />
          </div>
          {errors.streetAddress && (<div className="errorsDiv">{errors.streetAddress}</div>)}
        </div>

        {/* IMAGEURL - CREATE*/}
        {formType === "Create Restaurant" ?
        <div>
          <div>
            {/* <input
              className={formType === "Create Restaurant" ? "create-restaurant-input" : "update-restaurant-input"}
              size={57}
              type="url"
              name="imageUrl"
              onChange={(e) => {
                setImageUrl(e.target.value)
                setNewImageToggle(true)
              }}
              value={imageUrl}
              placeholder="Image URL"
              required
            /> */}
            <input
              type="file"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value)
                setNewImageToggle(true)
              }}
            />
          </div>
          {errors.imageUrl && (<div className="menu-item-create-error-text">{errors.  imageUrl}</div>)}
        </div>
        : null }

        {/* ERRORS */}
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        {/* BUTTON */}
        <div className={formType === "Update Restaurant" ? "update-restaurant-button-div" : null}>
          <button className={formType === "Create Restaurant" ? "create-restaurant-button" : null}>
          {formType === "Create Restaurant" ? "Next" : "Update"}
          </button>
          {formType === "Update Restaurant" ? <button onClick={handleCancel}>Cancel</button> : null }
        </div>

        </div>
      </div>
    </div>

      </form>
    </>
  )
}

export default RestaurantForm
