import React from 'react'

function Meal({ name, description, image }) {
    return (
        // <div>
        //     
        //     <div>{name}</div>
        //     {/* we want only 100 character as description */}
        //     <div>{description.length < 100 ? description : description.substring(0, 101)}</div>
        // </div>

        <div className="card">
            <img className="card-img-top" alt="meal image" src={image} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.length < 100 ? description : description.substring(0, 101) + " . . ."}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Meal