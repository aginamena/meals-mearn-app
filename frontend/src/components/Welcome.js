import React, { useState } from 'react'
import "../styles/Welcome.css"

function Welcome(props) {
    const [itemName, setItemName] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        const value = document.querySelector(".form-group .form-control").value;
        props.setItem(value);
    }
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(./assets/welcomeImage.jpg)" }}
            id="welcomePage">
            <div >
                <h1>Welcome!</h1>
                <small>Here you can search for your favorite meals</small>
                <div id="formElement">
                    <input type="text" className="form-control" id="inputElement" placeholder="Enter meal's name" />
                    <button style={{ width: "150px", marginLeft: "10px" }} type="submit" className="btn btn-primary" onClick={event => handleSubmit(event)}>Search Meal</button>
                </div>

            </div>
        </div>

    )
}

export default Welcome