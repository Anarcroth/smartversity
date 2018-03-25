import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
    // componentDidMount(){
    //     // fetch("http://owl.icc/library/").then(res => res.text()).then()
    // }

    render() {
        return (<div> <iframe style={{height: "1000px", width: "100%"}} src="http://owl.icc/library/" /></div> );
    }
}

export default UserProfile;
