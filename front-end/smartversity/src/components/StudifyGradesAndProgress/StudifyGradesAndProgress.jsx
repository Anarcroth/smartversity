import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import yourGradesImage from 'assets/img/grade.png';
import yourProgressImage from 'assets/img/progress.png';


class StudifyGradesAndProgress extends Component {
    render() {
        var style = {
            background: 'lightblue'
        };
        var image = {
            width: '120px',
            height: '120px',
        }
        return (
            <div id="about-us-container" style={style}>
                <Grid>
                    <Row className="display-inline-block align-middle">
                        <Col md={4}>
                            <img style={image} src={yourGradesImage} />
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
                            <img style={image} src={yourProgressImage} />
                        </Col>
                    </Row> {/*YOUR PROGRESS*/}
                </Grid>
            </div>
        );
    }
}

export default StudifyGradesAndProgress;
