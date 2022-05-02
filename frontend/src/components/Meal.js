import React from 'react'
import { Link } from 'react-router-dom';
import CategoryModal from './CategoryModal';

function Meal({ name, description, image, ViewCategory, tags, instructions, youtube, isLoggedin }) {
    return (
        <>
            <div className="card">
                <img className="card-img-top" alt="meal image" src={image} />
                <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 className="card-title">{name}</h5>
                        {tags && <small>{tags}</small>}
                    </div>
                    {
                        description && <p className="card-text">{description.length < 100 ? description : description.substring(0, 101) + " . . ."}</p>
                    }
                    {
                        ViewCategory ? <button className="btn btn-primary" data-toggle="modal" data-target="#categoryModal"> Order Now</button> :
                            isLoggedin ? <Link to={"/viewcategory/" + name}>
                                <button className="btn btn-primary"> View Category</button> :
                            </Link>
                                : <button className="btn btn-primary" data-toggle="modal"
                                    data-target="#errorModal"> View Category</button>

                    }

                </div>
            </div>
            <CategoryModal
                name={name}
                image={image}
                tags={tags}
                instructions={instructions}
                youtubeTutorial={youtube}
            />
        </>

    )
}

export default Meal