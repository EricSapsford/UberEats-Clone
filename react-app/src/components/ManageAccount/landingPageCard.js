import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/session";
import './ManageAccount.css';

function LandingPageCard() {

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
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
    </>
  )
}

export default LandingPageCard
