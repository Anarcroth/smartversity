import React, { Component } from 'react';
import StudifyHeader from 'components/StudifyHeader/StudifyHeader'

class LandingPage extends Component {
    render() {
        return (
            <div className="studifyheader-content">
                <StudifyHeader imgSrc={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} headerText={'TEST'}>
                </StudifyHeader>
            </div>
        );
    }
}

export default LandingPage;
