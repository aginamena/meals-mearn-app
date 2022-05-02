import React from 'react'
import "../styles/Header.css";
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <Link to="/">
                <a className="navbar-brand">Meals</a>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button type="button" class="btn btn-primary">Login</button>
                    <button type="button" class="btn btn-secondary">Signup</button>
                </div>
            </div>
        </nav>
    )
}

export default Header