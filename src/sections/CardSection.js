import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Section from '../components/Section'
import Sample1 from '../../assets/sample-1.jpg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const CardSection = () => (
    <Section title="Cards">
        <Col xs={12} md={6} lg={3}>
            <Card>
                <Card.Header>Card header</Card.Header>
                <Card.Body>
                    <Card.Title>This is the card title</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            This card has a header and footer!
                        </Card.Text>
                    </Card.Body>
                </Card.Body>
                <Card.Footer>Card footer</Card.Footer>
            </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
            <Card>
                <Card.Body>
                    <Card.Body>
                        <Card.Title>This is the card title</Card.Title>
                        <Card.Text>This card has card links!</Card.Text>
                        <Card.Link href="#">A link</Card.Link>
                        <Card.Link href="#">Another link</Card.Link>
                    </Card.Body>

                </Card.Body>
            </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
            <Card>
                <Card.Img variant="top" src={Sample1} />
                <Card.Body>
                    <Card.Title>This is the card title</Card.Title>
                    <Card.Text>This card has an image!</Card.Text>
                </Card.Body>
            </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
            <Card>
                <Card.Body>
                    <Card.Title>This is the card title</Card.Title>
                    <Card.Text>This card has list items!</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>List item one</ListGroupItem>
                    <ListGroupItem>List item two</ListGroupItem>
                    <ListGroupItem>List item three</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Section>
)

export default CardSection