import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Section from '../components/Section'
import Popover from 'react-bootstrap/Popover'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const TitledPopover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">This is the title!</Popover.Title>
        <Popover.Content>And here's some text!</Popover.Content>
    </Popover>
)

const TooltipPopover = <Tooltip>This is disabled!</Tooltip>

const PopoverSection = () => {
    const [position, setPosition] = useState('top')

    return (
        <Section title="Popovers">
            <Col xs={12} md={8}>
                <OverlayTrigger trigger="click" placement={position} overlay={TitledPopover}>
                    <Button className="m-1">Click to show popover!</Button>
                </OverlayTrigger>

                <OverlayTrigger overlay={TooltipPopover} placement={position}>
                    <span className="d-inline-block m-1">
                        <Button style={{ pointerEvents: 'none' }} disabled>
                            Hover over me!
                        </Button>
                    </span>
                </OverlayTrigger>
            </Col>

            <Col xs={12} md={4}>
                <Form>
                    <Form.Group>
                        <Form.Label>Position</Form.Label>
                        <Form.Control as="select" defaultValue="top" onChange={e => setPosition(e.target.value)}>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
        </Section>
    )
}

export default PopoverSection