import React, { Component } from 'react';
import config from '../../helpers/config';
import './Konzis.scss';
import Konzi from '../konzi/Konzi';

class Konzis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            konzis: []
        };
    }

    async componentDidMount() {
        const endpoint = `${config.serverUrl}/konzi`;
        const response = await fetch(endpoint);
        const konzis = await response.json();
        this.setState({ konzis });
    }

    render() {
        const list = this.state.konzis.map( (konzi) =>
            <Konzi key={konzi._id} {...konzi} />
        );
        return <div className="konzis">{ list }</div>;
    }
}

export default Konzis;
