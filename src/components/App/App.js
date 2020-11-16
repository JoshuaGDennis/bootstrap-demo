import "./App.scss"
import Nav from '../Nav'
import React from 'react'
import Hero from '../Hero'
import Card from '../Card'
import Section from '../Section'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Sample1 from '../../../assets/sample-1.jpg'
import Sample2 from '../../../assets/sample-2.jpg'
import Sample3 from '../../../assets/sample-3.jpg'

const App = () =>  (
    <>
        <Nav />
        <Hero />
        <Section title="Headings">
            <Col xs={12} md={4}>
                <h3>First heading</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
            <Col xs={12} md={4}>
                <h3>Second heading</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
            <Col xs={12} md={4}>
                <h3>Third heading</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in leo nisi. Donec ut lacinia dui.
                    Aliquam cursus aliquet massa a rhoncus. Vivamus eleifend porta eleifend.
                </p>
            </Col>
        </Section>

        <Section title="Images">
            <Col xs={12} md={4}>
                <Image src={Sample1} fluid rounded />
            </Col>
            <Col xs={12} md={4}>
                <Image src={Sample2} fluid rounded />
            </Col>
            <Col xs={12} md={4}>
                <Image src={Sample3} fluid rounded />
            </Col>
        </Section>

        <Section title="Cards">
            <Col xs={12} md={4}>
                <Card title="Card title" image={Sample3}>
                    SOME TEXT
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card title="Card title" image={Sample2}>
                    SOME TEXT
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card title="Card title" image={Sample1}>
                    SOME TEXT
                </Card>
            </Col>
        </Section>
    </>
);


export default App;