import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import yourScheduleImage from 'assets/img/schedule.png';
import yourCalendarImage from 'assets/img/calendar.png';

class LandingFooter extends Component {
    render() {
        return (
            <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
                <Grid>
                    <Row>
                        <ul>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm btn-fb mx-1">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm btn-fb mx-1">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm btn-fb mx-1">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm btn-fb mx-1">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </Row>
                </Grid>
            </footer>
                );
    }
}

export default LandingFooter;

