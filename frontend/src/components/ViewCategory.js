import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';
import Meal from './Meal';
import "../styles/ViewCategory.css"
import CategoryModal from './CategoryModal';


function ViewCategory() {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name)
                .then(response => response.json())
                .then(data => setData(data.meals))
            setIsLoading(false)
        }
        , [])
    return (
        isLoading ?
            <div>
                <h1>Loading {name}...</h1>
                <ReactLoading type={"spin"} color={"#0d6efd"} height={'50px'} width={'50px'} />
            </div>
            :
            <>
                {
                    data ?
                        <>
                            <div id="meals" className="container">
                                {
                                    data.map(meal => (
                                        <Meal
                                            name={meal.strMeal}
                                            key={meal.idMeal}
                                            image={meal.strMealThumb}
                                            ViewCategory={true}
                                            tags={meal.strTags}
                                            instructions={meal.strInstructions}
                                            youtube={meal.strYoutube}
                                            id={meal.idMeal}
                                        />
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div id="empty">{name} is out of stock</div>
                }
                <CategoryModal />
            </>

    )
}

export default ViewCategory