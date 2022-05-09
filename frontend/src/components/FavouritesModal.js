import React, { useContext, useEffect, useState } from 'react'
import UserContext from './UserContext'
import { Modal, Card, Row, Col } from 'react-bootstrap'
function FavouritesModal() {
    const { showFavourites, shoudShowFavourites, favourites } = useContext(UserContext)
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        function getMeals() {
            favourites.forEach(async (favourite) => {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + favourite)
                const data = await response.json();
                // console.log(data);
                setMeals([...meals, data])
            })
        }
        getMeals();
    }, [showFavourites])
    return (
        <Modal
            size="lg"
            show={showFavourites}
            onHide={() => shoudShowFavourites(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Favourite meals
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                modal body goes here
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default FavouritesModal