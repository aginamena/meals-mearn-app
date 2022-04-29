import React from 'react'
import "../styles/Welcome.css"

function Welcome() {
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(./assets/welcomeImage.jpg)" }}
            id="welcomePage">
            <div >
                <h1>Welcome!</h1>
                <small>Here you can search for your favorite meals</small>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Search Meal</button>
                </form>
            </div>
        </div>

    )
}

export default Welcome