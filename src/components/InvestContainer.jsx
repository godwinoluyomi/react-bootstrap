import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InvestCard from './InvestCard';
import InvestForm from './InvestForm';

const InvestContainer = () => {
    return (
        <Container>
            {/* Single row */}
            <Row>
                {/* Form to Calculate investment */}
                <Col> <InvestForm /> </Col>

                {/* Investment Cards */}
                <Col> <InvestCard /> </Col>
                <Col> <InvestCard /> </Col>
                <Col> <InvestCard /> </Col>

            </Row>
        </Container>
    )
}

export default InvestContainer