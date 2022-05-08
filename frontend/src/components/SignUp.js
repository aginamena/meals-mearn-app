import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        //verifying if the email address dooesn't exists
        const user = await fetch("http://localhost:9000/user/verifyEmail/" + email);
        const repsonse = await user.json();
        if (repsonse) {
            setError(true);
            setErrorMessage("User already exists. Try again");
            return;
        }

        // verifying if the passwords match in the 2 password fields
        if (password !== confirmPassword) {
            setError(true);
            setErrorMessage("Passwords don't match. Try again");
            return;
        }

        //creating new users
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
                else {
                    props.loginUser();
                    navigate("/")
                }
            });
    }
    return (
        <form onSubmit={event => handleSubmit(event)} id="form">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required onChange={event => setEmail(event.target.value)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <input type="password" className="form-control" id="password" placeholder="Confirm Password" required onChange={event => setConfirmPassword(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-secondary">Sign up</button>
            {
                error && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
            }

        </form>
    )
}

export default SignUp