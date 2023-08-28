import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/session";
import './ManageAccount.css';

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

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  return (
    <>
      <div id='account-landing-outermost-box'>
        <div id='account-landing-left-sidebar'>
          <Link to=''><button>Orders</button></Link>
          <Link to=''><button>Create restaurant</button></Link>
          <Link to=''><button>Manage restaurants</button></Link>
          <span id='account-landing-sign-out-btn' onClick={handleLogout}>Sign out</span>
        </div>

        <div id='account-landing-details'>
          <div id='account-landing-header'>
            Account Info
          </div>
          <div id='account-landing-subheader'>
            Basic Info
          </div>
          <div className='account-landing-info-header'>
            Name
          </div>
          <div className='account-landing-info'>
            {sessionUser.firstName} {sessionUser.lastName}
          </div>
          <div className='account-landing-info-header'>
            Username
          </div>
          <div className='account-landing-info'>
            {sessionUser.username}
          </div>
          <div className='account-landing-info-header'>
            Email
          </div>
          <div className='account-landing-info'>
            {sessionUser.email}
          </div>
          <div className='account-landing-info-header'>
            Street address
          </div>
          <div className='account-landing-info'>
            {sessionUser.streetAddress}
          </div>
        </div>
      </div>
    </>
  )
};
