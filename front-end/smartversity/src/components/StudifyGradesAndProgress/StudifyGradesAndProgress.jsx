import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import yourGradesImage from 'assets/img/grade.png';
import yourProgressImage from 'assets/img/progress.png';


class StudifyGradesAndProgress extends Component {
    render() {
        return (
            <div id="about-us-container">
                <Grid>
                    <Row>
                        <Col md={4}>
                            <img className="fit-image" src={yourGradesImage} />
                        </Col>

                        <Col md={8}>
                            <p>YOUR GRADES</p>
                            <p>Lorem Ipsum</p>
                        </Col>
                    </Row> {/* YOUR GRADES */}
                    <Row>
                        <Col md={8}>
                            <p>YOUR PROGRESS</p>
                            <p>Lorem Ipsum</p>
                        </Col>
                        <Col md={4}>
                            <img className="fit-image" src={yourProgressImage} />
                        </Col>
                    </Row> {/*YOUR PROGRESS*/}
                </Grid>
            </div>
        );
    }
}

export default StudifyGradesAndProgress;
