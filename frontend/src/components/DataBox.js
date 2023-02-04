import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
//import { Link } from "react-router-dom";
//import Button from 'react-bootstrap/Button';

function DataBox(props) {
    const [elementDisplay, setElementDisplay] = useState(null);
    const [chainDisplay, setChainDisplay] = useState(null);

    useEffect(() => {
        if(props.data[0] !== undefined) {
            if (elementDisplay == null) {

                fetch("http://localhost:5050/Tempath/" + props.data[0])
                    .then(results => results.json())
                    .then(data => {
                        setElementDisplay(data);
                    })
                console.log(elementDisplay);
            }
        }
    })

    if (elementDisplay) {


        return (
        <div id="dataBox">
            <Col id="dataBoxCol">
                <Row><h1>{elementDisplay.title[0]}</h1></Row>
                <Row>
                    <Col><h6>{elementDisplay.startDate.startDate}</h6></Col>
                    <Col><h6>{elementDisplay.endDate.endDate}</h6></Col>
                </Row>
                <Row>
                    <h6>{elementDisplay.referenceGroup.heirarchy}</h6>
                    <h6>{elementDisplay.referenceGroup.value}</h6>
                </Row>
                <Row>
                    <h5>Interpretation: {elementDisplay.interpretation}</h5>
                </Row>
                <Row>
                    <h5>Chain: {chainDisplay}</h5>
                </Row>
                <Row>
                    <h5>Reliability: {elementDisplay.reliability}</h5>
                </Row>
            </Col>
            
            
        </div>
        )
    }
}

export default DataBox;