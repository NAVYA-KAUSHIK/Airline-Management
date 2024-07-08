import React from 'react'
import './FlightResultStyles.css'

function FlightResults() {
    // Example flight data
    const flights = [
        { id: 1, from: 'New York', to: 'Paris', price: '$400', duration: '7h 30m' },
        { id: 2, from: 'Los Angeles', to: 'Tokyo', price: '$700', duration: '11h 15m' },
        // Add more flight data here
    ]

    return (
        <div className='flight-results'>
            <div className="container">
                <h2>Available Flights</h2>
                <ul>
                    {flights.map(flight => (
                        <li key={flight.id}>
                            <p>From: {flight.from} To: {flight.to}</p>
                            <p>Price: {flight.price}</p>
                            <p>Duration: {flight.duration}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FlightResults
