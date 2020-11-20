import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Section from '../components/Section'

const FormSection = () => {

    const [ validated, setValidated ] = useState(false)

    const handleSubmit = (e) => {
        if(!e.currentTarget.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <Section title="Forms" center>
            <Col md={8}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="Enter first name" required />
                            <Form.Control.Feedback type="invalid">Please enter a first name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6}>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Enter last name" required />
                            <Form.Control.Feedback type="invalid">Please enter a last name</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control placeholder="House name, street name" />
                            <Form.Text className="text-muted">
                                This could be some note about the input!
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control placeholder="Enter email" type="email" required />
                            <Form.Control.Feedback type="invalid">Please enter an email address</Form.Control.Feedback>
                        </Form.Group>
        
                        <Form.Group as={Col} xs={12} md={6}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Enter password" type="password" required />
                            <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} md={4}>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="Enter your city" />
                        </Form.Group>
        
                        <Form.Group as={Col} xs={12} md={4}>
                            <Form.Label>Region</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option disabled>Choose...</option>
                                <option>Some region</option>
                                <option>Another region</option>
                                <option>One more region!</option>
                            </Form.Control>
                        </Form.Group>
        
                        <Form.Group as={Col} xs={12} md={4}>
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control placeholder="Enter your postcode" />
                        </Form.Group>
                    </Row>
        
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Col>
        </Section>
    )
}

export default FormSection