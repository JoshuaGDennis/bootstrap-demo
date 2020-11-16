import React from 'react'
import Card from 'react-bootstrap/Card'

const CustomCard = ({ image, title, children }) => (
    <Card>
        {image && <Card.Img variant="top" src={image} />}
        <Card.Body>
            {title && <Card.Title>{title}</Card.Title>}
            {children}
        </Card.Body>
    </Card>
)

export default CustomCard