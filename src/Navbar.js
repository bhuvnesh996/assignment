import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <div className='float-left'>
                <li><a href="#"> YourChallenge</a></li>
                </div>
                <div className='float-right'>
                <li><a href="#">Product</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Pricing</a></li>
                </div>
            </ul>
            
        </div>
    )
}

export default Navbar
