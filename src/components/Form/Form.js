import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CustomForm = ({ inputs, formTitle, onSubmit }) => {
    const [ isValidated, setValidated ] = useState(false)

    const handleSubmit = (e) => {
        if (!e.currentTarget.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }

        setValidated(true)
        onSubmit && onSubmit()
    }

    const buildInput = ({ id, label, errorText, fieldText, ...rest }, i) => (
        <Form.Group controlId={id} key={id || i}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control {...rest} />
            {fieldText && ( <Form.Text>{fieldText}</Form.Text>)}
            {errorText && (
                <Form.Control.Feedback type="invalid">
                    {errorText}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
    
    return (
        <>
            {formTitle && <h4>{formTitle}</h4>}
            <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
                {inputs.map(buildInput)}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default CustomForm