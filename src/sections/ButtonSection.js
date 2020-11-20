import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Section from '../components/Section'
import Button from 'react-bootstrap/Button'

const ButtonSection = () => {
    const [ outline, setOutline ] = useState(false)
    const [ disabled, setDisabled ] = useState(false)

    return (
        <Section title="Buttons">
            <Col xs={12} md={8}>
                {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(variant => (
                    <Button 
                        className="m-1" 
                        key={variant} 
                        variant={`${outline ? 'outline-' : ''}${variant}`} 
                        disabled={disabled} 
                        size="lg"
                    >
                        {variant}
                    </Button>
                ))}
            </Col>

            <Col xs={12} md={4}>
                <Form>
                    <Form.Check label="Outline" onChange={e => setOutline(e.target.checked)} />
                    <Form.Check label="Disabled" onChange={e => setDisabled(e.target.checked)} />
                </Form>
            </Col>
        </Section>
    )
}

export default ButtonSection