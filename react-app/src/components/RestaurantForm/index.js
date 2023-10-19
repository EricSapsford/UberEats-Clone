import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as restaurantActions from "../../store/restaurant"
import { createRestaurantThunk } from "../../store/restaurant";
import { createImageFileAndUrl, deleteImageFileRestaurant } from "../../store/image"
import "./RestaurantFormCreate.css"
import "./RestaurantFormUpdate.css"

// restaurantActions.createRestaurantThunk(restaurant)

export default function RestaurantForm({ restaurant, formType }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();

  const [name, setName] = useState(restaurant?.name);
  const [streetAddress, setStreetAddress] = useState(restaurant?.streetAddress);
  const [category, setCategory] = useState(restaurant?.category);
  const [priceRange, setPriceRange] = useState(restaurant?.priceRange);
  const [imageFile, setImageFile] = useState('');
  const [imageUrl, setImageUrl] = useState(restaurant?.imageUrl);
  const [newImageToggle, setNewImageToggle] = useState(false);
  const [triggerRerenderToggle, setTriggerRerenderToggle] = useState(false);

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleCancel = async (e) => {
    e.preventDefault();

    restaurant = {
      ...restaurant,
      restaurantId: restaurant.id
    };

    try {
      const res = await dispatch(restaurantActions.updateRestaurantThunk(restaurant));
      // console.log("INSIDE UPDATE RESTAURANT TRY BLOCK - RES", res)
      { res.errors ? setErrors(res.errors) : setErrors([]); }
      if (res.restaurant.id) {
        setErrors([]);
      } else {
        return res
      }
    } catch (res) {
      // const data = await res.json();
      // if (data && data.errors) {
      //   setErrors(data.errors);
      // }
      const data = res
      if (data && data.errors) {
        setErrors(data.errors);
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CREATE/UPDATE IMAGE
    if (formType === "Create Restaurant") {
      try {
        const resCreate = await dispatch(createImageFileAndUrl(imageFile));
        { resCreate.errors ? setErrors(resCreate.errors) : setErrors([]); }

        if (resCreate.url) {
          restaurant = {
            ...restaurant,
            name,
            streetAddress,
            category,
            imageUrl: resCreate.url,
            priceRange,
            restaurantId: restaurant.id
          };
        }
      } catch (resCreate) {
        return resCreate;
      }
    } else if (formType === "Update Restaurant" && newImageToggle) {
      try {
        const resDelete = await dispatch(deleteImageFileRestaurant(restaurant.id));
        { resDelete.errors ? setErrors(resDelete.errors) : setErrors([]); }
        if (resDelete.message) {
          const resCreate = await dispatch(createImageFileAndUrl(imageFile));
          { resCreate.errors ? setErrors(resCreate.errors) : setErrors([]); }

          if (resCreate.url) {
            restaurant = {
              ...restaurant,
              name,
              streetAddress,
              category,
              imageUrl: resCreate.url,
              priceRange,
              restaurantId: restaurant.id
            };
          }
        } else if (resDelete.errors) {
          setErrors(resDelete.errors);
        }
      } catch (resDelete) {
        return resDelete;
      }
    } else if (formType === "Update Restaurant" && !newImageToggle) {
      restaurant = {
        ...restaurant,
        name,
        streetAddress,
        category,
        imageUrl,
        priceRange,
        restaurantId: restaurant.id
      };
    }


    // CREATE/UPDATE RESTAURANT
    if (formType === "Create Restaurant") {

      try {
        const res = await dispatch(createRestaurantThunk(restaurant));
        { res.errors ? setErrors(res.errors) : setErrors([]); }
        if (res.restaurant.id) {
          setErrors([]);
          // console.log("ID", res.restaurant.id)
          history.push(`restaurants/${res.restaurant.id}/menu/manage`);
        } else {
          return res
        }
      } catch (res) {
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
        { res.errors ? setErrors(res.errors) : setErrors([]); }
        if (res.restaurant.id) {
          setErrors([]);
        } else {
          return res
        }
      } catch (res) {
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
  };

  useEffect(() => {
    if (name.length > 25) {
      errors.name = "Maximum 25 characters";
    } else {
      errors.name = "";
    }
    setTriggerRerenderToggle(!triggerRerenderToggle);
  }, [name]);

  useEffect(() => {
    if (streetAddress.length >= 31) {
      errors.streetAddress = "Maximum 30 characters";
    } else if (streetAddress.length <= 30) {
      errors.streetAddress = "";
    };
    setTriggerRerenderToggle(!triggerRerenderToggle);
  }, [streetAddress]);

  useEffect(() => {
  }, [triggerRerenderToggle]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >

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
          {formType === "Update Restaurant" ?
            <div>
              <img
                className='restaurantImage'
                src={restaurant.imageUrl ? restaurant.imageUrl
                  : "https:upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholdesvg"
                }
                alt="RestauImage"
              />
            </div>
            : null
          }

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
                {errors.name && (<div className="menu-item-error-text">{errors.name}</div>)}
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
                      required
                    >
                      {/* <option value="(select one)">
                        (select one)
                      </option> */}
                      <option value="" disabled selected>(select category)</option>
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
                    {formType === "Create Restaurant" ?
                      <legend>What price range best characterizes your restaurant?</legend>
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
                  {errors[0] === 'price_range : This field is required.' ?
                    <div className="rest-price-range-error-text">
                      Price range is required
                    </div>
                    : null
                  }
                  {/* {errors.price_range && (<div className="errorsDiv">{errors.priceRange}</div>)} */}
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
                {errors.streetAddress && (<div className="menu-item-error-text">{errors.streetAddress}</div>)}
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
                      // className={formType === "Create Restaurant" ? "create-restaurant-input" : "update-restaurant-input"}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImageFile(e.target.files[0])
                      }}
                      required
                    />
                  </div>
                  {errors.imageUrl && (<div className="menu-item-create-error-text">{errors.imageUrl}</div>)}
                </div>
                :
                <div>
                  <div>
                    <input
                      // className={formType === "Create Restaurant" ? "create-restaurant-input" : "update-restaurant-input"}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImageFile(e.target.files[0])
                        setNewImageToggle(true)
                      }}
                    />
                  </div>
                  {errors.imageUrl && (<div className="menu-item-create-error-text">{errors.imageUrl}</div>)}
                </div>
              }

              {/* ERRORS */}
              {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul> */}

              {/* BUTTON */}
              <div className={formType === "Update Restaurant" ? "update-restaurant-button-div" : null}>
                <button className={formType === "Create Restaurant" ? "create-restaurant-button" : null}>
                  {formType === "Create Restaurant" ? "Next" : "Update"}
                </button>
                {formType === "Update Restaurant" ? <button onClick={handleCancel}>Cancel</button> : null}
              </div>

            </div>
          </div>
        </div>

      </form >
    </>
  )
};
