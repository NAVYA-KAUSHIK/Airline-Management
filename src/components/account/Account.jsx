import React from 'react'
import './AccountStyles.css'

function Account() {
    return (
        <div className='account'>
            <div className="container">
                <h2>My Account</h2>
                <p>Login to view your bookings and manage your account.</p>
                <form>
                    <div className="input-wrap">
                        <label>Email</label>
                        <input type="email" placeholder='Your Email' />
                    </div>
                    <div className="input-wrap">
                        <label>Password</label>
                        <input type="password" placeholder='Your Password' />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Account
