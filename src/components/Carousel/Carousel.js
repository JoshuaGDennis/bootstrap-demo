import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CustomCarousel = ({ items }) => (
    <Carousel>
        {items.map(item => (
            <Carousel.Item key={item.caption}>
                <img className="d-block w-100" src={item.img} />
                {item.caption && (
                    <Carousel.Caption>
                        <h3>{item.caption}</h3>
                    </Carousel.Caption>
                )}
            </Carousel.Item>
        ))}
    </Carousel>
)

export default CustomCarousel