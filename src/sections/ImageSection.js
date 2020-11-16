import Col from 'react-bootstrap/Col'
import Form from '../components/Form'
import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import Section from '../components/Section'
import Sample1 from '../../assets/sample-1.jpg'
import Sample2 from '../../assets/sample-2.jpg'
import Sample3 from '../../assets/sample-3.jpg'

const ImageSection = () => {
    const [ rounded, setRounded ] = useState(false)
    const [ circle, setCircle ] = useState(false)
    const [ thumbnail, setThumbnail ] = useState(false) 

    return (
        <Section title="Images">
            <Col xs={12} md={3}>
                <Image 
                    src={Sample1}
                    rounded={rounded} 
                    roundedCircle={circle} 
                    thumbnail={thumbnail}
                    fluid 
                />
            </Col>
            <Col xs={12} md={3}>
                <Image 
                    src={Sample2}
                    rounded={rounded} 
                    roundedCircle={circle} 
                    thumbnail={thumbnail}
                    fluid 
                />
            </Col>
            <Col xs={12} md={3}>
                <Image 
                    src={Sample3}
                    rounded={rounded} 
                    roundedCircle={circle} 
                    thumbnail={thumbnail}
                    fluid 
                />
            </Col>
            <Col xs={12} md={3}>
                <Form 
                    formTitle="Image controls"
                    inputs={[ 
                        { 
                            label: "Rounded corners", 
                            type: 'checkbox',
                            onChange: (e) => setRounded(e.target.checked)
                        },
                        {
                            label: 'Rounded circles',
                            type: "checkbox",
                            onChange: (e) => setCircle(e.target.checked)
                        },
                        {
                            label: 'Thumbnail',
                            type: "checkbox",
                            onChange: (e) => setThumbnail(e.target.checked)
                        }
                    ]}
                    noSubmit
                />
            </Col>
        </Section>
    )
}

export default ImageSection