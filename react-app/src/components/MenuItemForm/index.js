import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createMenuItemThunk } from "../../store/menuItems";
// import { updateMenuItemThunk } from "../../store/menuItems";
import './MenuItemForm.css';

export default function MenuItemForm({ menuItem, formType }) {
  const dispatch = useDispatch();
  const history = useHistory();

  let restaurantId;
  let menuItemId;
  if (formType === 'Create Menu Item') {
    const { restaurantIdFromParams } = useParams();
    restaurantId = restaurantIdFromParams;
  } else if (formType === 'Update Menu Item') {
    const { menuItemIdFromParams } = useParams();
    menuItemId = menuItemIdFromParams;
  }

  // controlled inputs
  const [name, setName] = useState(menuItem?.name);
  const [type, setType] = useState(menuItem?.type);
  const [price, setPrice] = useState(menuItem?.price);
  const [description, setDescription] = useState(menuItem?.description);
  const [imageUrl, setImageUrl] = useState(menuItem?.imageUrl);

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({});

  // submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    menuItem = {
      ...menuItem,
      name,
      type,
      price,
      description,
      imageUrl,
      menuItemId,
    }

    if (formType === 'Create Menu Item') {

      try {
        const res = await dispatch(createMenuItemThunk(menuItem)); // VScode gives note about not needing 'await', but it IS needed
        if (res.id) {
          setErrors({});
          history.push(`/menu-items/${res.id}`);
        } else {
          return res;
        }
      } catch (res) { // if exception in above code, run .catch()
        const data = await res.json(); // get data from db
        if (data && data.errors) { // if errors from db
          setErrors(data.errors); // setErrors
        }
      };

    } else if (formType === 'Update Menu Item') {

      try {
        const res = await dispatch(updateMenuItemThunk(menuItem)); // VScode gives note about not needing 'await', but it IS needed
        if (res.id) {
          setErrors({});
          history.push(`/menu-items/${res.id}`);
        } else {
          return res;
        }
      } catch (res) { // if exception in above code, run .catch()
        const data = await res.json(); // get data from db
        if (data && data.errors) { // if errors from db
          setErrors(data.errors); // setErrors
        }
      };
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className='create-menu-item-form-section'>
          <div className='form-top-header'>
            {formType === 'Create Menu Item' ? 'Create Menu Item' : 'Update Menu Item'}
          </div>
        </div>

        <div className='create-menu-item-form-section'>
          <div>
            <input
              className="input-spacer input-text"
              size="57"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Name'
              required
            />
          </div>
          {errors.name && (<div className="menu-item-create-error-text">{errors.name}</div>)}
        </div>

        <div>
          <select
            className="input-spacer input-text"
            onChange={(e) => setType(e.target.value)}
            value={type}
            required
          >
            <option key='(select type)' value='(select type)'>(select type)</option>
            <option key='appetizer' value='appetizer'>Appetizer</option>
            <option key='entree' value='entree'>Entree</option>
            <option key='dessert' value='dessert'>Dessert</option>
            <option key='beverage' value='beverage'>Beverage</option>
          </select>
        </div>
        {errors.type && (<div className="menu-item-create-error-text">{errors.type}</div>)}

        <div>
          <input
            className="input-spacer input-text"
            size="57"
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder='Price'
            required
          />
        </div>
        {errors.price && (<div className="menu-item-create-error-text">{errors.price}</div>)}

        <div>
          <textarea
            className="input-spacer input-text"
            rows="8" cols="56"
            id='comments'
            name='description'
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder='Description'
          />
        </div>
        {errors.description && (<div className="menu-item-create-error-text">{errors.description}</div>)}

        <div>
          <input
            className="input-spacer input-text"
            size="57"
            type="url"
            name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            placeholder='Image URL'
            required
          />
        </div>
        {errors.imageUrl && (<div className="menu-item-create-error-text">{errors.imageUrl}</div>)}


        <button
          className={disabled ? "create-menu-item-form-button-disabled" : "create-menu-item-form-button"}
          disabled={disabled}
        >
          {formType === 'Create Menu Item' ? 'Create' : 'Update'}
        </button>

      </form>
    </>
  )
};
