import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/session";
import './ManageAccount.css';
import LandingPageCard from './landingPageCard';
import CurrentUserRestaurants from '../Restaurants/userRestaurants';
import RestaurantFormCreate from '../RestaurantFormCreate';
import PastOrdersPage from '../PastOrdersPage';
import WalletLandingPage from '../Wallet';
import MenuItemFormUpdate from '../MenuItemFormUpdate';
import { useAccountView } from '../../context/AccountView';

export default function ManageAccount() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { view, setView } = useAccountView();

  const sessionUser = useSelector(state => state.session.user);

  const [accountDetailsToggle, setAccountDetailsToggle] = useState(true)
  const [pastOrderToggle, setPastOrderToggle] = useState(false)
  const [createRestaurantToggle, setRreateRestaurantToggle] = useState(false)
  const [manageRestaurantsToggle, setManageRestaurantsToggle] = useState(false)
  const [currentView, setCurrentView] = useState('account')


  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  useEffect(() => {
  }, [accountDetailsToggle, pastOrderToggle, createRestaurantToggle, manageRestaurantsToggle])

  return (
    <div className='account-page'>
      <div id='account-landing-outermost-box'>
        <div id='account-landing-left-sidebar'>
          <button className={view === 'account' ? "active-page" : ""} onClick={() => setView('account')}>Account Details</button>
          <button className={view === 'orders' ? "active-page" : ""} onClick={() => setView('orders')}>Orders</button>
          <button className={view === 'wallet' ? "active-page" : ""} onClick={() => setView('wallet')}>Wallet</button>
          <button className={view === 'create' ? "active-page" : ""} onClick={() => setView('create')}>Create Restaurant</button>
          <button className={view === 'manage' ? "active-page" : ""} onClick={() => setView('manage')}>Manage Restaurants</button>
          <button id='account-landing-sign-out-btn' onClick={handleLogout}>Sign out</button>
        </div>


        <div id='account-landing-right-content'>
          {/* {accountDetailsToggle ? <LandingPageCard /> : null}
          {pastOrderToggle ? <PastOrdersPage parent="account" /> : null}
          {createRestaurantToggle ? <RestaurantFormCreate /> : null}
          {manageRestaurantsToggle ? <CurrentUserRestaurants /> : null} */}
          {view === 'account' ? <LandingPageCard /> : null}
          {view === 'orders'? <PastOrdersPage parent="account" /> : null}
          {view === 'wallet'? <WalletLandingPage /> : null}
          {view === 'create' ? <RestaurantFormCreate /> : null}
          {view === 'manage' ? <CurrentUserRestaurants /> : null}
          {view === 'menu' ? <MenuItemFormUpdate /> : null}
        </div>
      </div>
    </div>
  )
};
