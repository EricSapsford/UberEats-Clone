import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="profile-container">
      <button onClick={openMenu}>
        <i id='theBurgerLogo' class="fa-solid fa-burger"></i>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div id='profile-container-content-logged-in'>
              <div>
                <span className="dropdown-icon-spacer" >
                  <i id='dropdown-user-icon' class="fa-solid fa-user"></i>
                </span>
                <span>
                  {user.firstName}
                </span>
              </div>
              {/* <div>{user.email}</div> */}
              <div onClick={closeMenu}>
                <Link
                  to='/account'
                  className="green"
                >
                  Manage account
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link to="/past-orders">
                  <span className="dropdown-icon-spacer" >
                    <i class="fa-solid fa-clipboard-list"></i>
                  </span>
                  Orders
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link to="/wallet">
                  <span className="dropdown-icon-spacer" >
                    <i class="fa-solid fa-wallet"></i>
                  </span>
                  Wallet
                </Link>
              </div>
              <div onClick={closeMenu}>
                <span id='dropdown-sign-out-link' onClick={handleLogout}>Sign out</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id='profile-container-content-logged-out'>
              <span onClick={closeMenu}>
                <OpenModalButton
                  buttonText="Sign up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </span>
              <span onClick={closeMenu}>
                <OpenModalButton
                  buttonText="Log in"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
