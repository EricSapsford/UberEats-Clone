import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { logout } from "../../store/session";
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useShoppingCart } from '../../context/ShoppingCart';
import ShoppingCartModal from '../ShoppingCart';

export default function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  return (
    <nav>
      <span id="nav-right-hamburger-and-logo">
        {isLoaded && (<ProfileButton user={sessionUser} />)}
        <NavLink exact to="/">
          <span id='nav-logo-text'>
            Vancouber<span id='logo-eats-text'>Eats</span>
          </span>
        </NavLink>
      </span>
      <span id="nav-left-other-buttons">
        <NavLink exact to="/restaurants">
          <span id='restaurantsNavLinkDiv'>
            Restaurants
          </span>
        </NavLink>
        {sessionUser === null ?
          <>
            <div id='logInSignUpNavDiv'>
              <div className='navModalButton'><OpenModalButton
                buttonText='Log In'
                modalComponent={<LoginFormModal />} />
              </div>
              <div className='navModalButton'><OpenModalButton
                buttonText='Sign Up'
                modalComponent={<SignupFormModal />} /></div>
            </div>
          </>
          :
          <>
            {/* <span><button onClick={handleLogout}>Sign out</button></span> */}
            {isLoaded && <ShoppingCartModal />}
          </>
        }
      </span>
    </nav >
  )
};
