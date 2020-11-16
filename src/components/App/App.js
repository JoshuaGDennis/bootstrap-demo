import "./App.scss"
import Nav from '../Nav'
import React from 'react'
import Hero from '../Hero'
import Card from '../Card'
import Form from '../Form'
import Section from '../Section'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Sample1 from '../../../assets/sample-1.jpg'
import Sample2 from '../../../assets/sample-2.jpg'
import Sample3 from '../../../assets/sample-3.jpg'
import ImageSection from '../../sections/ImageSection'
import ModalSection from '../../sections/ModalSection'
import CarouselSection from '../../sections/CarouselSection'

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

        <ImageSection />

        <Section title="Cards">
            <Col xs={12} md={4}>
                <Card 
                    title="Card title"
                    subtitle="Card subtitle" 
                    image={Sample3}
                    links={[ 
                        { text: 'Link 1', href: '#' },
                        { text: 'Link 2', href: '#' },
                    ]} 
                >
                    SOME TEXT
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card 
                    title="Card title"
                    subtitle="Card subtitle" 
                    image={Sample2}
                    links={[ 
                        { text: 'Link 1', href: '#' },
                        { text: 'Link 2', href: '#' },
                    ]} 
                >
                    SOME TEXT
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card 
                    title="Card title"
                    subtitle="Card subtitle" 
                    image={Sample1}
                    links={[ 
                        { text: 'Link 1', href: '#' },
                        { text: 'Link 2', href: '#' },
                    ]} 
                >
                    SOME TEXT
                </Card>
            </Col>
        </Section>

        <CarouselSection />

        <Section title="Forms" center>
            <Col xs={12} md={6}>
                <Form 
                    formTitle="Login form"
                    onSubmit={() => console.log("submitted!!!")} 
                    inputs={[
                        { 
                            id: "formEmail", 
                            placeholder: "Email address", 
                            type: "email", 
                            required: true, 
                            errorText: "Please enter a valid email address" 
                        },
                        { 
                            id: "formPassword", 
                            placeholder: "Password", 
                            type: "password", 
                            required: true, 
                            errorText: "Please enter a password" 
                        }
                    ]}
                />
            </Col>
        </Section>

        <ModalSection />
    </>
);


export default App;