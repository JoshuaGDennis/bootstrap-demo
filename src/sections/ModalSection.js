import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Section from '../components/Section'
import Button from 'react-bootstrap/Button'

const ModalSection = () => {
    const [ show, setShow ] = useState(false)
    const [ strict, setStrict ] = useState(false)
    const [ centered, setCentered ] = useState(true)

    const toggleModal = () => setShow(s => !s)

    return (
        <Section title="Modals" center>
            <Button onClick={toggleModal}>Show modal</Button>

            <Modal show={show} onHide={toggleModal} centered={centered} backdrop={strict ? 'static' : true}>
                <Modal.Header closeButton>
                    <Modal.Title>Here is a modal!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Check label="Centered" onChange={e => setCentered(e.target.checked)} checked={centered} />
                        <Form.Check label="Strict (Won't close on click away)" onChange={e => setStrict(e.target.checked)} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Close</Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </Section>
    )
}

export default ModalSection