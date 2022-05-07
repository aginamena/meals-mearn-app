import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Welcome.css"
import UserContext from './UserContext';


function Welcome(props) {
    const navigate = useNavigate();
    const { setShowErrorModal } = useContext(UserContext);
    function handleSubmit(event) {
        event.preventDefault();
        if (props.isLoggedIn) {
            const value = document.querySelector("#inputElement").value;
            navigate("./viewcategory/" + value)
        }

    }
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(./assets/welcomeImage.jpg)" }}
            id="welcomePage">
            <div >
                <h1>Welcome!</h1>
                <small>Here you can search for your favorite meals</small>
                <form id="formElement"
                    onSubmit={event => handleSubmit(event)}
                >
                    <input type="text" className="form-control" id="inputElement" placeholder="Enter meal's name" required />
                    {
                        props.isLoggedIn ?
                            <button
                                style={{ width: "150px", marginLeft: "10px" }}
                                type="submit"
                                className="btn btn-primary"
                            >Search Meal</button>
                            :
                            <button
                                style={{ width: "150px", marginLeft: "10px" }}
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => setShowErrorModal(true)}
                            >Search Meal</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Welcome