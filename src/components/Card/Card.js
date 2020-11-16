import React from 'react'
import Card from 'react-bootstrap/Card'

const CustomCard = ({ image, title, subtitle, children, links }) => (
    <Card>
        {image && <Card.Img variant="top" src={image} />}
        <Card.Body>
            {title && <Card.Title>{title}</Card.Title>}
            {subtitle && <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>}
            <Card.Text>{children}</Card.Text>
            {links && links.map(({ href, text }) => (
                <Card.Link href={href} key={text}>{text}</Card.Link>
            ))}
        </Card.Body>
    </Card>
)

export default CustomCard