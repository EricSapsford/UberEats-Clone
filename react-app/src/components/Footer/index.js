import { Link } from 'react-router-dom';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import { useSelector } from 'react-redux';
import './Footer.css';

export default function Footer() {

    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
            <div id="footer">
                {/* <h1>footer</h1> */}
                <div id='footer-col-1'>
                    <div id='footer-logo-text'>
                        VancouberEats
                    </div>
                </div>
                <div className='footer-right'>
                    <div id='footer-col-3'>
                        <div className='footer-right-header'>Features</div>
                        <div>
                            <Link exact to="/restaurants">
                                <div>Restaurants near me</div>
                            </Link>
                            {!sessionUser && (<div id='footerModal'><OpenModalButton
                                buttonText='Create an Account'
                                modalComponent={<SignupFormModal />} />
                            </div>)}
                        </div>
                    </div>
                    <div id='footer-col-2'>
                        <div className='footer-right-header'>Contact Us</div>
                        <div className='footer-name-list'>
                            <div className='footer-name'>
                                <div>Will Campbell</div>
                                <div className='footer-links'>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='footer-name'>
                                <div>Erica Maranowski</div>
                                <div className='footer-links'>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='footer-name'>
                                <div>Josh Pascual</div>
                                <div className='footer-links'>
                                    <a href="https://www.linkedin.com/in/josh-pascual/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/joshpas24" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='footer-name'>
                                <div>Eric Sapsford</div>
                                <div className='footer-links'>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer-copyright'>
                @ 2023 Vancouber Eats
            </div>
        </>
    )
};
