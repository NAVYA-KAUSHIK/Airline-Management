import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>JETSETGO!</h3>
                    <div className="contact">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaEnvelope className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="center">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
