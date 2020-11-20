import "./App.scss"
import Nav from '../Nav'
import React from 'react'
import Hero from '../Hero'
import Section from '../Section'
import Col from 'react-bootstrap/Col'
import FormSection from '../../sections/FormSection'
import CardSection from '../../sections/CardSection'
import ImageSection from '../../sections/ImageSection'
import ModalSection from '../../sections/ModalSection'
import ToastSection from '../../sections/ToastSection'
import PopoverSection from '../../sections/PopoverSection'
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

        <CardSection />

        <CarouselSection />

        <FormSection />

        <ModalSection />

        <PopoverSection />

        <ToastSection />
    </>
);


export default App;