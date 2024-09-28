import './Navbar.css'
import logo from './../../assets/images/logo.png'
import { PiListBold } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
function Navbar() {
    const show_list = () => {
        const list = document.getElementById('nav_list')
        const button = document.getElementById('navbar_button')
        const toggle = document.getElementById('toggle')
        const cancel = document.getElementById('cancel')
        list.classList.add('display_toggle')
        button.style.display = 'flex'
        toggle.style.display = 'none'
        cancel.style.display = 'block'
    }
    const hide_list = () => {
        const list = document.getElementById('nav_list')
        const button = document.getElementById('navbar_button')
        const toggle = document.getElementById('toggle')
        const cancel = document.getElementById('cancel')
        list.classList.remove('display_toggle')
        button.style.display = 'none'
        toggle.style.display = 'block'
        cancel.style.display = 'none'
    }

    return (
        <nav className='navbar'>
            <div className='navbar_small'>
                <img src={logo} alt="logo" />
                <PiListBold onClick={show_list} id="toggle" />
                <FaTimes onClick={hide_list} id='cancel' />
            </div>
            <img src={logo} alt="logo" id='first_logo' />
            <ul id='nav_list' onClick={hide_list}>
                <li><a href="#">Home</a></li>
                <li><a href="#best_deals">Best Deals</a></li>
                <li><a href="#how_sec">Service</a></li>
                <li><a href="#trending_sec">New Property</a></li>
                <li><a href="#footer">Contact</a></li>


            </ul>
            <button id='navbar_button'>Login</button>
        </nav>
    )
}

export default Navbar