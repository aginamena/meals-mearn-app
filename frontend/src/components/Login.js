import React, { useState } from 'react'
import "../styles/form.css";
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    //we don't want the body to be dark when we're in the login page
    // that's why we remove it, if it exists
    const modalElement = document.querySelector(".modal-backdrop");
    if (modalElement) modalElement.remove();

    async function handleSubmit(event) {
        event.preventDefault();

        const user = await fetch("http://localhost:9000/user/verifyEmail/" + email);
        const repsonse = await user.json();
        //if user with that email doesn't exist or the passwords don't match then 
        //show error message
        if (!repsonse || repsonse.password !== password) {
            setError(true);
            return;
        }
        // if we reach here then credentials is correct and we log in the user
        props.loginUser();
        navigate("/")
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
            <button type="submit" className="btn btn-primary">Log in</button>
            {
                error && <div style={{ color: "red", marginTop: "10px" }}>User doesn't exist with such credentials. Try again</div>
            }

        </form>
    )
}

export default Login