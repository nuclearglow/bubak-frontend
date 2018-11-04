import React, { Component } from 'react';
import './Konzi.scss';
import moment from 'moment';
import config from '../../helpers/config';

class Konzi extends Component {

    render() {
        const flyerUrl = `${config.serverUrl}/${this.props.flyer}`;
        return (
            <div className="konzi">
                <div className="title">{ this.props.title }</div>
                <div className="date">{ moment(this.props.date).format('DD.MM.YYYY hh:mm') }</div>
                <div className="description">{ this.props.description }</div>
                <img className="flyer" src={ flyerUrl } alt="flyer" />
            </div>
        );
    }
}

export default Konzi;
