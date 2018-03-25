import React, { Component } from 'react';
import headerImage from 'assets/img/landingpagepic.png';
import { Grid, Row, Col } from 'react-bootstrap';

class StudifyAboutUs extends Component {
    render() {
        return (
            <div id="about-us-container">
                <Grid>
                    <Row>
                        <Col md={10} xsOffset={1}>
                            <Col md={4}>
                                {/* <img /> */}
                                <p>Access your schedule, grades. Check your performance.</p>
                            </Col>

                            <Col md={4}>
                                {/* <img /> */}
                                <p>Watch videos and read written materials that your school's tutors have prepared for you.</p>
                            </Col>

                            <Col md={4}>
                                {/* <img /> */}
                                <p>Digital copies of all your textbooks with notes from your professors and interactive videos.</p>
                            </Col>
                        </Col>
                    </Row> {/*ICONS + DESCRIPTION*/}
                    <Row>
                        <Col md={12}>
                            <p>SOME COOL TEXT ABOUT US #MILENA</p>
                        </Col>
                    </Row> {/*ABOUT US DESCRIPTION*/}
                </Grid>
            </div>
        );
    }
}

export default StudifyAboutUs;
