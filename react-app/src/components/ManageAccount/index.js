import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/session";
import './ManageAccount.css';
import LandingPageCard from './landingPageCard';
import CurrentUserRestaurants from '../Restaurants/userRestaurants';

export default function ManageAccount() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  // TO EDIT:
  // ONLY DISPLAY 'ORDERS' BTN IF USER HAS 1+ ORDERS
  // ONLY DISPLAY 'MANAGE RESTS' BTN IF USER OWNS 1+ RESTS
  // OR -- could have simple landing pages, like:
  // "You don't have any orders yet! button:[Explore Restaurants]"
  // "You don't have any restaurants yet! button:[Create Restaurant]"

  // CONSIDER REFACTORING TO NOT DISPLAY FOOTER ON ALL PAGES
  // (SINCE REAL WEBSITE HAS NO FOOTER ON ACCOUNT PAGE)

  const [accountDetailsToggle, setAccountDetailsToggle] = useState(true)
  const [pastOrderToggle, setPastOrderToggle] = useState(false)
  const [createRestaurantToggle, setRreateRestaurantToggle] = useState(false)
  const [manageRestaurantsToggle, setManageRestaurantsToggle] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  const pastOrders = (e) => {
    setAccountDetailsToggle(false);
    setPastOrderToggle(true);
    setRreateRestaurantToggle(false);
    setManageRestaurantsToggle(false);
  }

  const createRestaurant = (e) => {
    setAccountDetailsToggle(false);
    setPastOrderToggle(false);
    setRreateRestaurantToggle(true);
    setManageRestaurantsToggle(false);
  }

  const manageRestaurants = (e) => {
    setAccountDetailsToggle(false);
    setPastOrderToggle(false);
    setRreateRestaurantToggle(false);
    setManageRestaurantsToggle(true);
  }

  const accountDetails = (e) => {
    setAccountDetailsToggle(true);
    setPastOrderToggle(false);
    setRreateRestaurantToggle(false);
    setManageRestaurantsToggle(false);
  }

  useEffect(() => {
  }, [accountDetailsToggle, pastOrderToggle, createRestaurantToggle, manageRestaurantsToggle])

  return (
    <>
      <div id='account-landing-outermost-box'>
        <div id='account-landing-left-sidebar'>
          <button onClick={pastOrders}>Orders</button>
          <button onClick={createRestaurant}>Create Restaurant</button>
          <button onClick={manageRestaurants}>Manage Restaurants</button>
          <button onClick={accountDetails}>Account Details</button>
          <span id='account-landing-sign-out-btn' onClick={handleLogout}>Sign out</span>
        </div>


        <div>
          {accountDetailsToggle ? <LandingPageCard /> : null}
          {/* {pastOrderToggle ? <PastOrdersCard /> : null} */}
          {/* {createRestaurantToggle ? <CreateRestaurantForm /> : null} */}
          {manageRestaurantsToggle ? <CurrentUserRestaurants /> : null}
        </div>
        {/* <div>
          <CurrentUserRestaurants />
        </div> */}
      </div>
    </>
  )
};
