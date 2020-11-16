import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = () => (
    <Jumbotron fluid>
        <Container>
            <h1>React Bootstrap Demo!</h1>
            <p>
                This is just a landing page highlighting some of the cool things that React-bootstrap has to offer!
            </p>
            <Button variant="primary" href="https://react-bootstrap.github.io/components/alerts" target="_blank">Learn more</Button>
        </Container>
    </Jumbotron>
)

export default Hero