import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import './HomePage.css';

export default function HomePage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)
    console.log("here is the session user:", sessionUser);
    return (
        <>
            <div>
                <img id='homePageBanner' src="https://i.imgur.com/EyE2WrH.jpg" title="source: imgur.com" />
            </div>
            <div className='homePageImgBoxes'>
                <div>
                    <img className='homePageImgs' src="https://i.imgur.com/XjeURwBl.jpg" title="source: imgur.com" />
                    <h3>Feeling hungry?</h3>
                    <div className='homePageModal'>
                        {!sessionUser && <OpenModalButton
                        buttonText='Sign up today'
                        modalComponent={<SignupFormModal/>}/>}
                    </div>
                </div>
                <div>
                    <img className='homePageImgs' src="https://i.imgur.com/cBdF6vdl.jpg" title="source: imgur.com" />
                    <h3>New to the Vancouver Food Scene?</h3>
                    <div><Link to='/restaurants/'>Check out restaurants near you</Link></div>
                </div>
                <div>
                    <img className='homePageImgs' src="https://i.imgur.com/2FW8qkBl.jpg" title="source: imgur.com" />
                    <h3>Already know what you want?</h3>
                    <div className='homePageModal'>
                        {!sessionUser && <OpenModalButton
                        buttonText='Log in to your account'
                        modalComponent={<LoginFormModal/>}/>}
                    </div>
                </div>
            </div>
        </>
    )
}
