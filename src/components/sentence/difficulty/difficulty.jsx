import './difficulty.css';

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Container, Row } from 'react-bootstrap';

class Difficulty extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        return (      
            
            <div className="Difficulty">
                <Container fluid>
                    <Row>
                        <Col>
                            <span className="white-text">Selection une difficulté = </span>
                        </Col>
                        <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Difficulté
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Standard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Simple</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hardcore</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>  
            </div>   
                
        );
    };
}

export default Difficulty;