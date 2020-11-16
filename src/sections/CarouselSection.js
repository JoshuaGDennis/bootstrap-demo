import Col from 'react-bootstrap/Col'
import Form from '../components/Form'
import React, { useState } from 'react'
import Section from '../components/Section'
import Carousel from 'react-bootstrap/Carousel'
import Sample1 from '../../assets/sample-1.jpg'
import Sample2 from '../../assets/sample-2.jpg'
import Sample3 from '../../assets/sample-3.jpg'


const CarouselSection = () => {
    const [ fade, setFade ] = useState(false)
    const [ indicators, setIndicators ] = useState(true)

    return (
        <Section title="Carousel">
            <Col xs={12} md={8}>
                <Carousel fade={fade} indicators={indicators}>
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
                <Form 
                    formTitle="Carousel controls"
                    inputs={[
                        { 
                            label: 'Fade', 
                            type: "checkbox", 
                            onChange: (e) => setFade(e.target.checked) 
                        },
                        { 
                            label: 'Indicators', 
                            type: 'checkbox', 
                            onChange: (e) => setIndicators(e.target.checked),
                            checked: indicators
                        }
                    ]}
                    noSubmit
                />
            </Col>
        </Section>
    )
}

export default CarouselSection