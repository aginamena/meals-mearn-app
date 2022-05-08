import React, { useContext } from 'react'
import "../styles/Header.css";
import { Link } from "react-router-dom"
import UserContext from './UserContext';
import { BsFillCartCheckFill } from "react-icons/bs"

function Header(props) {

    const { setShowLogoutModal } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <Link id="RouterNavLink" to="/">Meals</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {
                        props.isLoggedIn ?
                            <div id="cartContainer">
                                <div>
                                    <BsFillCartCheckFill color='black' fontSize={25} />
                                    <div id="favouriteItemsCount">0</div>
                                </div>

                                <button type="button" className="btn btn-primary"
                                    onClick={() => setShowLogoutModal(true)}
                                >Log out</button>

                            </div>

                            :
                            <>
                                <Link to="/login">
                                    <button type="button" className="btn btn-primary"
                                    >Log in</button>
                                </Link>

                                <Link to="/signup">
                                    <button type="button" className="btn btn-secondary">Sign up</button>
                                </Link>

                            </>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Header