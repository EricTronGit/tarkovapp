import './difficulty.css';

import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';

function Difficulty(props) {

    const SIMPLE = "Simple";
    const STANDARD = "Standard";
    const DIFFICILE = "Difficile";
    const HARDCORE = "Hardcore"

    const [dropdownTitle, setDropdownTitle] = useState("Standard");

    const changeDifficulty =  (eventKey) => {
        setDropdownTitle(eventKey);        
        props.difficultySelect(eventKey);
    }   

    return (
            <div className="Difficulty">
                <Row>
                    <Col className="text-md-left py-2 px-4">
                        <span className="label">
                            Choisissez une difficultée
                        </span>
                    </Col>
                    <Col md={5} className="px-0">
                        <Dropdown onSelect={changeDifficulty.bind(this)}>
                            <Dropdown.Toggle id="dropdown-basic" variant="" className="btn-block dropdown-tarkov">
                                {dropdownTitle}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-tarkov w-100 text-center">
                                <Dropdown.Item eventKey={SIMPLE}>{SIMPLE}</Dropdown.Item>
                                <Dropdown.Item eventKey={STANDARD}>{STANDARD}</Dropdown.Item>
                                <Dropdown.Item eventKey={DIFFICILE}>{DIFFICILE}</Dropdown.Item>
                                <Dropdown.Item eventKey={HARDCORE}>{HARDCORE}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }


export default Difficulty;