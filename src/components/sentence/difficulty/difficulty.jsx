import './difficulty.css';

import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col } from 'react-bootstrap';

function Difficulty(props) {

    const [dropdownTitle, setDropdownTitle] = useState("Standard");

    const changeDifficulty =  (eventKey) => {
        setDropdownTitle(eventKey);        
        props.difficultySelect(eventKey);
    }   
    
    return (
        <Col fluid>   
            <div className="Difficulty">
                            <p className="white-text">Sélectionne une difficulté</p>                        
                            <Dropdown onSelect={changeDifficulty.bind(this)}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-tarkov">
                                    {dropdownTitle}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>                                    
                                    <Dropdown.Item eventKey="Hardcore">Hardcore</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
            </div>  
        </Col> 
                
        );
    }


export default Difficulty;