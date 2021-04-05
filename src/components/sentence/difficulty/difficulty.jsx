import './difficulty.css';

import React, { useEffect } from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';

function Difficulty(props) {

    const SIMPLE = "Simple";
    const STANDARD = "Standard";
    const DIFFICILE = "Difficile";
    const HARDCORE = "Hardcore"

    const [dropdownTitle, setDropdownTitle] = useState("Standard");

    let [appLangage, setAppLangage] = useState(props.langage); 


    useEffect(() => {
        setAppLangage(props.langageSelect()); 
      });


    const changeDifficulty =  (eventKey) => {
        setDropdownTitle(eventKey);        
        props.difficultySelect(eventKey);
    }   
    

    return (
            <div className="Difficulty">
                <Row>
                    <Col className="text-md-left py-2 px-4">
                        <span className="label">
                            {appLangage === "FR" ? "Choisissez une difficultée": "Choose a difficulty"}
                        </span>
                    </Col>
                    <Col md={5} className="px-0">
                        <Dropdown onSelect={changeDifficulty.bind(this)}>
                            <Dropdown.Toggle id="dropdown-basic" variant="" className="btn-block dropdown-tarkov">
                                {dropdownTitle}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-tarkov w-100 text-center">
                                <Dropdown.Item eventKey={SIMPLE}>{appLangage === "FR" ? "Simple": "Simple"}</Dropdown.Item>
                                <Dropdown.Item eventKey={STANDARD}>{appLangage === "FR" ? "Standard": "Standard"}</Dropdown.Item>
                                <Dropdown.Item eventKey={DIFFICILE}>{appLangage === "FR" ? "Difficile": "Difficult"}</Dropdown.Item>
                                <Dropdown.Item eventKey={HARDCORE}>{appLangage === "FR" ? "Hardcore": "Hardcore"}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }


export default Difficulty;