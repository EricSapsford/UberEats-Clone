import { Link } from 'react-router-dom';
import LoginFormRedirectToOrdersModal from '../LoginFormRedirectToOrdersModal';
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
               <div id='footer-col'>
                  <div className='footer-right-header'>Features</div>
                  <div className='footer-list'>
                     <Link exact to="/restaurants">
                        <div>Restaurants</div>
                     </Link>
                     <Link exact to="/restaurants/1/menu">
                        <div>Menu Items</div>
                     </Link>
                     <Link exact to="/restaurants/1/menu">
                        <div>Reviews</div>
                     </Link>
                     {sessionUser ?
                        <Link exact to="/past-orders">
                           <div>Orders</div>
                        </Link>
                        :
                        <div id='footerModal'>
                           <OpenModalButton
                              buttonText='Orders'
                              modalComponent={<LoginFormRedirectToOrdersModal />}
                           />
                        </div>
                     }
                     {!sessionUser && (<div id='footerModal'><OpenModalButton
                        buttonText='Create an Account'
                        modalComponent={<SignupFormModal />} />
                     </div>)}
                  </div>
               </div>
               <div id='footer-col'>
                  <div className='footer-right-header'>Contact Us</div>
                  <div className='footer-list'>
                     <div className='footer-name'>
                        <div>Will Campbell</div>
                        <div className='footer-links'>
                           <a href="https://www.linkedin.com/in/will-campbell22/" target="_blank" rel="noopener noreferrer">
                              <i class="fa-brands fa-linkedin"></i>
                           </a>
                           <a href="https://github.com/wpcamp" target="_blank" rel="noopener noreferrer">
                              <i class="fa-brands fa-github"></i>
                           </a>
                        </div>
                     </div>
                     <div className='footer-name'>
                        <div>Erica Maranowski</div>
                        <div className='footer-links'>
                           <a href="https://github.com/emaranowski" target="_blank" rel="noopener noreferrer">
                              <i class="fa-brands fa-linkedin"></i>
                           </a>
                           <a href="https://www.linkedin.com/in/erica-maranowski/" target="_blank" rel="noopener noreferrer">
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
                           <a href="https://github.com/EricSapsford" target="_blank" rel="noopener noreferrer">
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
