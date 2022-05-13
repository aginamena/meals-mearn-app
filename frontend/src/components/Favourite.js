import React, { useState, useEffect, useContext } from 'react'
import Meal from './Meal';
import UserContext from './UserContext';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';

function Favourite() {
    const { favourites, userId, setFavourites } = useContext(UserContext)
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
    async function removeFavouriteMeal(mealId) {
        const response = await fetch("http://localhost:9000/user/" + userId + "/" + mealId, {
            method: "delete"
        })
        const data = await response.json();
        const filteredList = meals.filter(meal => meal.idMeal !== mealId)
        setFavourites(data);
        setMeals(filteredList);

    }

    return (
        <Container style={{ marginBottom: "50px" }}>
            <h3 style={{ margin: "20px auto" }}>My favourites</h3>
            <Row xs={1} md={2} className="g-4">
                {meals.map((meal, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={meal.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{meal.strMeal}</Card.Title>
                            </Card.Body>
                            <Button variant="danger" onClick={() => removeFavouriteMeal(meal.idMeal)}>Remove from favourites</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>


    )
}

export default Favourite