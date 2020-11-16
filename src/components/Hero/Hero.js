import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = () => (
    <Jumbotron fluid>
        <Container>
            <h1>Fluid jumbotron</h1>
            <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
            </p>
            <Button variant="primary">Learn more</Button>
        </Container>
    </Jumbotron>
)

export default Hero