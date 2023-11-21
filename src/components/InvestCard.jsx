import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Investment Card
const InvestCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/1.jpg" />
            <Card.Body>
                <Card.Title> Real Investment </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary"> Visit Site </Button>
            </Card.Body>
        </Card>
    )
}

export default InvestCard