import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Section from '../components/Section'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const ButtonSection = () => {
    const [ outline, setOutline ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ disabled, setDisabled ] = useState(false)
    const [ animation, setAnimation ] = useState('border')

    return (
        <Section title="Buttons">
            <Col xs={12} md={8}>
                {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(variant => (
                    <Button 
                        className="m-1" 
                        key={variant} 
                        variant={`${outline ? 'outline-' : ''}${variant}`} 
                        disabled={disabled || loading} 
                        size="lg"
                    >
                        {loading 
                            ? (
                                <Spinner animation={animation} role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            ) 
                            : variant
                        }
                    </Button>
                ))}
            </Col>

            <Col xs={12} md={4}>
                <Form>
                    <Form.Check label="Outline" onChange={e => setOutline(e.target.checked)} />
                    <Form.Check label="Disabled" onChange={e => setDisabled(e.target.checked)} />
                    <Form.Check label="Loading" onChange={e => setLoading(e.target.checked)}/>
                    <Form.Group>
                        <Form.Label>Spinner type</Form.Label>
                        <Form.Control as="select" defaultValue="border" onChange={e => setAnimation(e.target.value)}>
                            <option value="border">Border</option>
                            <option value="grow">Grow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
        </Section>
    )
}

export default ButtonSection