import './difficulty.css';

import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Container, Row } from 'react-bootstrap';

function Difficulty(props) {

    const [dropdownTitle, setDropdownTitle] = useState("Standard");

    const changeDifficulty =  (eventKey) => {
        setDropdownTitle(eventKey);        
        props.difficultySelect(eventKey);
    }   
    
    return (
            <div className="Difficulty">
                <Container fluid>
                    <Row>                    
                        <Col>
                            <span className="white-text">Sélectionne une difficulté</span>                        
                            <Dropdown onSelect={changeDifficulty.bind(this)}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {dropdownTitle}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>                                    
                                    <Dropdown.Item eventKey="Hardcore">Hardcore</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>                        
                    </Row>
                </Container>  
            </div>   
                
        );
    }


export default Difficulty;