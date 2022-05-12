import React, { useState, useEffect, useContext } from 'react'
import Meal from './Meal';
import UserContext from './UserContext';


function Favourite() {
    const { favourites } = useContext(UserContext)
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        async function getMeals() {
            let temp = [];
            await Promise.all(favourites.map(async favourite => {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + favourite)
                const data = await response.json();
                temp = [...temp, data.meals[0]]
            }))
            setMeals(temp);
        }
        getMeals();
    }, [])

    return (
        <div>
            should be here
            {
                // meals && meals.map((meal, index) => (
                //     <Meal
                //         name = {meal.strMeal}
                //         image = {meal.strMealThumb}
                //         tags = {meal.strTags}
                //     />
                //     // <div key={index}>here</div>
                // ))
            }
        </div>


    )
}

export default Favourite