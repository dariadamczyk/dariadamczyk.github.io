import React from 'react'
import './Header.css'
import FacebookIcon from '../img/facebook-icon.png'
import InstagramIcon from '../img/instagram-icon.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const isMenuActive = true;

    return (
        <div className='header-container'>
            <div className='header-bar'>
                <div className='logo-container'>
                    <Link to='/' className='logo-main'>
                        DARIADAMCZYK
                    </Link>
                </div>

                <div className='menu-container'>
                    <ul className='menu-list'>
                        <li><Link className='menu-item active' to='/'>Home</Link></li>
                        <li><Link className='menu-item' to='/Portfolio'>Portfolio</Link></li>
                        <li><Link className='menu-item' to='/Commerciality'>Commerciality</Link></li>
                        <li><Link className='menu-item' to='/More'>More</Link></li>
                    </ul>
                    <div className='menu-social-media'>
                        <a href='https://www.facebook.com/' className='social-media-item'>
                            <img src={FacebookIcon} alt="Facebook icon" />
                        </a>
                        <a href='https://www.instagram.com/' className='social-media-item'>
                            <img src={InstagramIcon} alt="Instagram icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header