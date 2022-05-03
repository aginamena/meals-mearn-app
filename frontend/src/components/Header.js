import React from 'react'
import "../styles/Header.css";
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <Link id="RouterNavLink" to="/">Meals</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/login">
                        <button type="button" className="btn btn-primary">Login</button>
                    </Link>

                    <button type="button" className="btn btn-secondary">Signup</button>
                </div>
            </div>
        </nav>
    )
}

export default Header