import React, { useState, useEffect } from 'react'
import Meal from './Meal';
import "../styles/Meals.css"
import ReactLoading from 'react-loading';

function Meals({ searchName, isLoggedIn }) {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // const [t, setT] = useState([]);
    // var searchedItems = [];
    useEffect(
        () => {
            async function fetchData() {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
                const data = await response.json();
                setMeals(data.categories);
            }
            fetchData()
            setIsLoading(false);
        }
        , [])
    return (
        isLoading ?
            <div style={{ display: 'flex', justifyContent: "center", marginBottom: "50px" }}>
                <ReactLoading type={"spin"} color={"#0d6efd"} height={'50px'} width={'50px'} />
            </div>

            :
            <div id="meals" className='container'>
                {
                    meals.map(meal => (
                        <Meal
                            name={meal.strCategory}
                            description={meal.strCategoryDescription}
                            key={meal.idCategory}
                            image={meal.strCategoryThumb}
                            isLoggedIn={isLoggedIn}
                            id={meal.idCategory}
                        />
                    ))
                }
            </div>
    )
}

export default Meals