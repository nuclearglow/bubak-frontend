import React, { Component } from 'react';

import './LandingView.scss';
import Bubak from '../../components/bubak/Bubak';

class LandingView extends Component {

    render() {
        return (
            <div className="landing-view">
                <Bubak />
            </div>
        );
    }
}

export default LandingView;
