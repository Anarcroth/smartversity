import React, { Component } from 'react';
import StudifyHeader from 'components/StudifyHeader/StudifyHeader'
import StudifyAboutUs from 'components/StudifyAboutUs/StudifyAboutUs'
import StudifyGradesAndProgress from 'components/StudifyGradesAndProgress/StudifyGradesAndProgress'
import { Grid, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTextTop: "STUDIFY",
            headerTextBottom: "All you need to improve your learning in one place"
        };
    }

    render() {
        return (
            <div className="studifyheader-content">
                <Grid fluid>
                    <Row>
                        <Col lg={12} sm={12}>
                            <StudifyHeader headerTextTop={this.state.headerTextTop} headerTextBottom={this.state.headerTextBottom}>
                            </StudifyHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} sm={12}>
                            <StudifyAboutUs>
                            </StudifyAboutUs>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} sm={12}>
                            <StudifyGradesAndProgress>
                            </StudifyGradesAndProgress>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
