import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import yourScheduleImage from 'assets/img/schedule.png';
import yourCalendarImage from 'assets/img/calendar.png';


class StudifyScheduleAndCalendar extends Component {
    render() {
        var style = {
            background: 'lightblue',
            };
        return (
            <div id="about-us-container" style={style}>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <img className="fit-image" src={yourScheduleImage} />
                        </Col>

                        <Col md={8}>
                            <p>YOUR SCHEDULE</p>
                            <p>Lorem Ipsum</p>
                        </Col>
                    </Row> {/* YOUR GRADES */}
                    <Row>
                        <Col md={8}>
                            <p>YOUR CALENDAR</p>
                            <p>Lorem Ipsum</p>
                        </Col>
                        <Col md={4}>
                            <img className="fit-image" src={yourCalendarImage} />
                        </Col>
                    </Row> {/*YOUR PROGRESS*/}
                </Grid>
            </div>
        );
    }
}

export default StudifyScheduleAndCalendar;

