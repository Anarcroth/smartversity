import React, { Component } from 'react';
import headerImage from 'assets/img/landingpagepic.png';


class StudifyHeader extends Component {
    render() {
        return (
            <div id="header-container">
                <img id="header-image" src={headerImage} />
                <p id="header-text-top">{this.props.headerTextTop}</p>
                <p id="header-text-bottom">{this.props.headerTextBottom}</p>                
            </div>
        );
    }
}

export default StudifyHeader;
