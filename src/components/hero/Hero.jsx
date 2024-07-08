import React, { useState } from 'react';
import './HeroStyles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import video from '../../assets/flight.mp4';

function Hero() {
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={video} type='video/mp4' />
            </video>
            <div className="overlay">
                <div className="content">
                    <h1>Search Flights</h1>
                    <h2>Enjoy hassle free bookings with JetSetGo</h2>
                    <form className="form">
                        <div className="input-row">
                            <input type="text" placeholder='From (City or Airport)' className="input-field" />
                            <input type="text" placeholder='To (City or Airport)' className="input-field" />
                        </div>
                        <div className="input-row">
                            <div className="date-input-container">
                                <input
                                    type="date"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                    className="input-field date-field"
                                />
                                {!departureDate && <span className="placeholder-text">Departure</span>}
                            </div>
                            <div className="date-input-container">
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="input-field date-field"
                                />
                                {!returnDate && <span className="placeholder-text">Return</span>}
                            </div>
                        </div>
                        <button type="submit" className="search-button">
                            <AiOutlineSearch className='icon' /> Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
