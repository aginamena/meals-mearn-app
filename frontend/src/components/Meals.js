import React, { useState, useEffect } from 'react'
import Meal from './Meal';
import "../styles/Meals.css"

function Meals() {
    const [meals, setMeals] = useState([])

    useEffect(
        () => {
            async function fetchData() {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
                const data = await response.json();
                setMeals(data.categories);
            }
            fetchData()
        }
        , [])
    return (
        <div id="meals">
            {meals.map((meal, index) => (
                <Meal
                    name={meal.strCategory}
                    description={meal.strCategoryDescription}
                    key={meal.idCategory}
                    image={meal.strCategoryThumb}
                />
            ))}
        </div>
    )
}

export default Meals