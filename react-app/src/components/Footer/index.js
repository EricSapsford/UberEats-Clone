import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div id="footer">
                {/* <h1>footer</h1> */}
                <div id='footer-col-1'>
                    <span id='footer-logo-text'>
                        VancouverEats
                    </span>
                </div>
                <div id='footer-col-2'>
                    <Link exact to="/restaurants">
                        <div>Restaurants near me</div>
                    </Link>
                    <div>Create an account</div>
                </div>
            </div>
            <div id='footer-copyright'>
                @ 2023 Vancouver Eats
            </div>
        </>
    )
};
