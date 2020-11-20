import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import Section from '../components/Section'

const ToastSection = () => {
    const [ clicks, setClicks ] = useState(0)
    const [ autoHide, setAutoHide ] = useState(false)

    return (
        <Section title="Toast">
            <Col xs={12} md={8}>
                {[...Array(clicks).keys()].map((i) => (
                    <Toast key={i} onClose={() => setClicks(s => s - 1)} delay={3000} autohide={autoHide}>
                        <Toast.Header>
                            <strong className="mr-auto">A toast!</strong>
                            <small>10 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>
                            This is some text for the toast!
                        </Toast.Body>
                    </Toast>
                ))}
                <Button onClick={() => setClicks(s => s + 1)}>Add a toast!</Button>
            </Col>
            <Col xs={12} md={4}>
                <Form>
                    <Form.Check label="Auto hide" onChange={e => setAutoHide(e.target.checked)} />
                </Form>
            </Col>
        </Section>
    )
}

export default ToastSection