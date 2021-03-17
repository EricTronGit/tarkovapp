import './difficulty.css';

import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col } from 'react-bootstrap';

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
        <Col>   
            <div className="Difficulty">
                <p className="white-text">SELECTIONNE UNE DIFFICULTE</p>                        
                <Dropdown onSelect={changeDifficulty.bind(this)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-tarkov">
                        {dropdownTitle}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-tarkov">
                        <Dropdown.Item eventKey={SIMPLE}>{SIMPLE}</Dropdown.Item> 
                        <Dropdown.Item eventKey={STANDARD}>{STANDARD}</Dropdown.Item>                                    
                        <Dropdown.Item eventKey={DIFFICILE}>{DIFFICILE}</Dropdown.Item> 
                        <Dropdown.Item eventKey={HARDCORE}>{HARDCORE}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>  
        </Col> 
                
        );
    }


export default Difficulty;