import React, { Component } from 'react';

import './KonzisView.scss';
import Konzis from '../../components/konzis/Konzis';

class KonzisView extends Component {

    render() {
        return (
            <div className="konzis-view">
                <Konzis />
            </div>
        );
    }
}

export default KonzisView;
