import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CustomForm = ({ inputs, formTitle, onSubmit, noSubmit }) => {
    const [ isValidated, setValidated ] = useState(false)

    const handleSubmit = (e) => {
        if (!e.currentTarget.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            onSubmit && onSubmit()
        }

        setValidated(true)
    }

    const buildField = (type, { options, ...rest }) => {
        if (type === 'select') {
            return (
                <Form.Control as="select" {...rest}>
                    {options.map(({ label, value }) => (
                        <option key={label} value={value}>{label}</option>
                    ))}
                </Form.Control>
            )
        }
        else if (type === 'checkbox') {
            return <Form.Check type={type} {...rest} />
        }

        return <Form.Control type={type} {...rest} />
    }


    const buildInput = ({ id, label, errorText, fieldText, type, ...rest }, i) => (
        <Form.Group className={type === 'checkbox' ? 'checkbox-group' : ''} controlId={id} key={id || i}>
            {label && <Form.Label>{label}</Form.Label>}
            {buildField(type, rest)}
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
                {!noSubmit && <Button variant="primary" type="submit">Submit</Button>}
            </Form>
        </>
    )
}

export default CustomForm