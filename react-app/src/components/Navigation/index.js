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

export default function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  //   history.push(`/`);
  // };

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
            VancoUberEats
          </span>
        </NavLink>
      </span>
      <span id="nav-left-other-buttons">
        <NavLink exact to="/restaurants">
          <span>
            Restaurants
          </span>
        </NavLink>
        {sessionUser === null ?
          <>
            <div id='logInSignUpNavDiv'>
              <div><OpenModalButton
              buttonText='Log In'
                modalComponent={<LoginFormModal/>} />
              </div>
              <div><OpenModalButton
              buttonText='Sign Up'
                modalComponent={<SignupFormModal/>} /></div>
            </div>
          </>
          :
          <>
            <span><button onClick={handleLogout}>Sign out</button></span>
          </>
        }
      </span>
    </nav >
  )
};
