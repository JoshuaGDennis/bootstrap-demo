import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Section = ({ children, title }) => (
    <div className="section">
        {title && <h2>{title}</h2>}
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    </div>
)

export default Section