import Nav from './Nav'
import Hero from './Hero'
import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const App = () =>  (
    <>
        <Nav />
        <Hero />
        <Container>
        <Row>
            <Col>
                <h2>First heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
            <Col>
                <h2>Second heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
            <Col>
                <h2>Third heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
        </Row>
        </Container>
    </>
);


export default App;