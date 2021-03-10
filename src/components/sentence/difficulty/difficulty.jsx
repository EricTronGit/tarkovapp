import './difficulty.css';

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Container, Row } from 'react-bootstrap';

class Difficulty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownTitle:"Standard"
        }
    }

    changeDifficulty(eventKey){
        this.setState({...this.state,dropdownTitle:eventKey});
    }

    render() { 
        return (
            <div className="Difficulty">
                <Container fluid>
                    <Row>                    
                        <Col>
                            <span className="white-text">Sélectionne une difficulté</span>                        
                            <Dropdown onSelect={this.changeDifficulty.bind(this)}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {this.state.dropdownTitle}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>
                                    <Dropdown.Item eventKey="Simple">Simple</Dropdown.Item>
                                    <Dropdown.Item eventKey="Hardcore">Hardcore</Dropdown.Item>
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