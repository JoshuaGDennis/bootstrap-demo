import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Section = ({ children, title, center }) => (
    <div className="section">
        {title && <h2 className="section-title">{title}</h2>}
        <Container>
            <Row className={center ? "justify-content-center" : ""}>
                {children}
            </Row>
        </Container>
    </div>
)

export default Section