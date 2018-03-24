import React, { Component } from 'react';

class StudifyHeader extends Component {
    render() {
        return (
            <div id="header-container">
                <img id="header-image" src={this.props.imageSrc} />
                <p>{this.props.headerText}</p>
            </div>
        );
    }
}

export default StudifyHeader;
