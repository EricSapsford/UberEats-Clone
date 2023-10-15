import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import PastOrdersPage from '../PastOrdersPage';
import './HomePage.css'


export default function HomePage() {
  const sessionUser = useSelector(state => state.session.user)



  return (
    <>
      <div id='homePageBanner'>
        <div>
          <img
            id='homePageBannerImage'
            src="https://i.imgur.com/EyE2WrH.jpg"
          />
        </div>
        <div>
          <span id='homePageBannerTextOverlay'>
            Enjoy top dining<br></br>
            in Vancouver
          </span>
        </div>
      </div>

      <div className='homePageImgBoxes'>

        <div id='img-1-div'>
          <img
            className='homePageImgs'
            src="https://i.imgur.com/XjeURwBl.jpg"
          />
          <h3 className='homeSubheader'>Feeling hungry?</h3>
          <div className='homePageModal homePageSubsectionLink1'>
            <OpenModalButton
              buttonText='Sign up today'
              modalComponent={<SignupFormModal />}
            />
          </div>
        </div>

        <div id='img-2-div'>
          <img
            className='homePageImgs'
            src="https://i.imgur.com/cBdF6vdl.jpg"
          />
          <h3 className='homeSubheader'>New to the food scene?</h3>
          <div className='homePageSubsectionLink2'>
            <Link
              to='/restaurants'
              id='checkoutRestLink'>
              Find restaurants near you
            </Link>
          </div>
        </div>

        <div id='img-3-div'>
          <img
            className='homePageImgs'
            src="https://i.imgur.com/2FW8qkBl.jpg"
          />
          <h3 className='homeSubheader'>Know what you want?</h3>
          <div className='homePageModal homePageSubsectionLink3'>
            <OpenModalButton
              buttonText='Log in to your account'
              modalComponent={<LoginFormModal />}
            />
          </div>
        </div>

      </div>
    </>
  )

}
