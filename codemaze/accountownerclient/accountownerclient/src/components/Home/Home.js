import React from 'react';
import {Col, Container} from 'react-bootstrap';
import './Home.css';

const home = (props) => {
    return(
        <Container>
            <Col md={12}>
                <div className={'homeText'}>
                    "Welcome to account-owner application"
                </div>
            </Col>
        </Container>
    )
}

export default home;