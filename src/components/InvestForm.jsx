import React from 'react'
import Form from 'react-bootstrap/Form';

// Investment Form
const InvestForm = () => {
    return (
        <Form>
            <h5 className='text-muted'> Calculate ROI </h5>
            <hr />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Amount </Form.Label>
                <Form.Control type="email" placeholder="NGN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Year </Form.Label>
                <Form.Control type="number" placeholder="" />
            </Form.Group>
        </Form>
    )
}

export default InvestForm