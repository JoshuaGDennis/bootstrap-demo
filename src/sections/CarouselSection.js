import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Section from '../components/Section'
import Carousel from 'react-bootstrap/Carousel'
import Sample1 from '../../assets/sample-1.jpg'
import Sample2 from '../../assets/sample-2.jpg'
import Sample3 from '../../assets/sample-3.jpg'


const CarouselSection = () => {
    const [ wrap, setWrap ] = useState(true)
    const [ fade, setFade ] = useState(false)
    const [ controls, setControls ] = useState(true)
    const [ indicators, setIndicators ] = useState(true)

    return (
        <Section title="Carousel">
            <Col xs={12} md={8}>
                <Carousel fade={fade} indicators={indicators} controls={controls} wrap={wrap}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Sample1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide</h3>
                            <p>This is the first slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Sample2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide</h3>
                            <p>This is the second slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Sample3} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide</h3>
                            <p>This is the third slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col xs={12} md={4}>
                <Form>
                    <Form.Check label="Fade" onChange={e => setFade(e.target.checked)} />
                    <Form.Check label="Indicators" onChange={e => setIndicators(e.target.checked)} checked={indicators} />
                    <Form.Check label="Controls" onChange={e => setControls(e.target.checked)} checked={controls} />
                    <Form.Check label="Wrap" onChange={e => setWrap(e.target.checked)} checked={wrap} />
                </Form>
            </Col>
        </Section>
    )
}

export default CarouselSection