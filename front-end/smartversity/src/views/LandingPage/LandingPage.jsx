import React, { Component } from 'react';
import StudifyHeader from 'components/StudifyHeader/StudifyHeader'
import { Grid, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    render() {
        return (
            <div className="studifyheader-content">
                <Grid fluid>
                    <Row>
                        <Col lg={6} sm={6}>
                            <StudifyHeader imageSrc={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} headerText={'TEST'}>
                            </StudifyHeader>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
