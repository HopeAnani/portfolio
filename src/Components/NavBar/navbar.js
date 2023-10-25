import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return(
            <nav className="navbar">
                <div className="menu">
                    <Link className="listItem">Home</Link>
                    <Link className="listItem">About</Link>
                    <Link className="listItem">Portfolio</Link>
                    <Link className="listItem">Contact</Link>
                </div>
            </nav>
        
    )
}

export default Navbar;