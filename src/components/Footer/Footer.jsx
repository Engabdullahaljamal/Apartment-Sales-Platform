import './Footer.css'
import logo from './../../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return (
        <footer id='footer'>
            <div className='footer_one'>
                <div className='first_part'>
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
                        felis vitae sit est quisque.</p>
                </div>
                <ul className='footer_list'>
                    <li className='header_list'>Service</li>
                    <li> <a href="#trending_sec">Payment & Tax</a></li>
                    <li> <a href="#find_sec">Features</a></li>
                    <li> <a href="#how_sec">View Booking</a></li>
                    <li> <a href="#">Support</a></li>
                </ul>
                <ul className='footer_list'>
                    <li className='header_list'>About</li>
                    <li> <a href="#">About us</a></li>
                    <li><a href="#how_sec">News</a></li>
                    <li><a href="#best_deals">Pricing</a></li>
                    <li><a href="#trending_sec">New Property</a> </li>
                </ul>
                <ul className='footer_list'>
                    <li className='header_list'>Our Location</li>
                    <li>2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                    <div className='icons_container'>

                        <a href='https://www.facebook.com'>   <FaFacebookF /></a>
                        <a href='https://x.com'>   <FaTwitter /></a>
                        <a href='https://www.linkedin.com'>    <FaLinkedinIn /></a>


                    </div>
                </ul>


            </div>
            <div className='footer_two'>
                <p >Copyright 2024 flora. All Rights Reserved</p>
                <div>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer