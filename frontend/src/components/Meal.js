import React from 'react'
import { Link } from 'react-router-dom';

function Meal({ name, description, image, ViewCategory }) {
    return (
        <div className="card">
            <img className="card-img-top" alt="meal image" src={image} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    description && <p className="card-text">{description.length < 100 ? description : description.substring(0, 101) + " . . ."}</p>
                }
                {ViewCategory ? <button className="btn btn-primary"> Order Now</button> :
                    <Link to={"/viewcategory/" + name}>
                        <button className="btn btn-primary"> View Category</button>
                    </Link>

                }

            </div>
        </div>
    )
}

export default Meal