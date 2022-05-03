import React, { useState } from 'react'
import "../styles/form.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    // window.location.reload()
    // document.querySelector("#root").style = "background-color:white";
    function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                emailAddress: document.querySelector("#email").value,
                password: document.querySelector("#password").value
            })
        }
        const url = "http://localhost:9000/user/createUser"
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                if (data === "error required")
                    setError(true)
                else navigate("/")
            });
    }
    return (
        <form onSubmit={event => handleSubmit(event)} id="form">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {
                error && <div style={{ color: "red" }}>User already exists. Try again</div>
            }

        </form>
    )
}

export default Login