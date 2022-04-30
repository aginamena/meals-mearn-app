import React, { useState, useEffect } from 'react'
import Meal from './Meal';
import "../styles/Meals.css"

function Meals({ searchName }) {
    const [meals, setMeals] = useState([])
    const [t, setT] = useState([]);
    var searchedItems = [];
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
    async function searchForItem() {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchName)
        const data = await response.json()
        // searchedItems = data.meals
        setT(data.meals);
        console.log(t)
        return t.length > 0;
    }

    return (
        <div id="meals" className='container'>
            {

                meals.map((meal, index) => (
                    <Meal
                        name={meal.strCategory}
                        description={meal.strCategoryDescription}
                        key={meal.idCategory}
                        image={meal.strCategoryThumb}
                    />
                ))
            }
            {/* {searchName.length == 0 ?
                meals.map((meal, index) => (
                    <Meal
                        name={meal.strCategory}
                        description={meal.strCategoryDescription}
                        key={meal.idCategory}
                        image={meal.strCategoryThumb}
                    />
                ))

                : */}
            {/* // searchForItem() && t.map((meal, index) => <div key={index}>{meal.strMeal}</div>)
                searchForItem() ?
                    t.map((meal, index) => (
                        <Meal
                            name={meal.strCategory}
                            key={meal.idMeal}
                            image={meal.strMealThumb}
                        />
                    ))
                    // searchedItems.map(() => (<div>sdfasdfasdf</div>))

                    : */}
            {/* <div style={{ fontSize: "18px", fontWeight: "bold" }}>Item "{searchName}" doesn't exist</div> */}

        </div>
    )
}

export default Meals