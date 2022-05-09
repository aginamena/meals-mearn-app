import React, { useContext, useEffect, useState } from 'react'
import "../styles/Modal.css"
import { Modal, Button, Image } from "react-bootstrap"
import UserContext from './UserContext'
import Loading from 'react-loading'
import { useParams } from 'react-router-dom'

function CategoryModal() {
    const { showCategory, modelId, shouldShowCategory, favourites
        , setFavourites, userId } = useContext(UserContext)
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            async function getData() {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + modelId)
                const mealInfo = await response.json();
                setData(mealInfo.meals[0]);
                setLoading(false);
            }
            // if the modelId isn't null, we get the data
            modelId && getData()
        }
        , [modelId])

    async function addToFavourates() {
        //sending model id to backend
        const response = await fetch("http://localhost:9000/user/addToFavourite/" + userId + "/" + modelId, { method: "put" });
        const data = await response.json();
        setFavourites(data.favourites);
        shouldShowCategory(false)
    }
    return (
        <Modal show={showCategory} onHide={() => shouldShowCategory(false)}>
            {
                !loading &&
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.strMeal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={data.strMealThumb} />
                        <div style={{ margin: "20px 0" }}>
                            {
                                data.strTags && <div style={{ display: "flex", alignItems: "center" }}>
                                    <h5 style={{ marginRight: "20px" }}>Tags:</h5>
                                    <small>{data.strTags}</small>
                                </div>
                            }
                            <a href={data.strYoutube} target="_blank">Youtube tutorial</a>
                        </div>

                        <div>
                            <h3>Instructions</h3>
                            <div>{data.strInstructions}</div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        {
                            favourites.includes(modelId) ?
                                <Button variant="primary" onClick={() => shouldShowCategory(false)}>This meals is already added to your favourates</Button>
                                : <Button variant="primary" onClick={() => addToFavourates()}>Add to favourites</Button>
                        }
                    </Modal.Footer>
                </>
            }

        </Modal>
    )
}

export default CategoryModal