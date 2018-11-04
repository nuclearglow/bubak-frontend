import React, { Component } from 'react';

import './MainView.scss';
import Konzis from '../../components/konzis/Konzis';
import Bubak from '../../components/bubak/Bubak';

class MainView extends Component {

    render() {
        return (
            <div className="main-view">
                <Bubak />
                <Konzis />
            </div>
        );
    }
}

export default MainView;
