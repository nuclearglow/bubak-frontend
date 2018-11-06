import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl, Marker, Popup, ScaleControl, RotationControl } from "react-mapbox-gl";

import 'mapbox-gl/dist/mapbox-gl.css';
import './Mapbox.scss';

import config from '../../helpers/config';

class Mapbox extends Component {

    render() {
        const Map = ReactMapboxGl({
            accessToken: config.mapBoxAccessToken,
            minZoom: 5,
            maxZoom: 20
        });
        const coordinates = [8.667288, 49.8830748];

        return (
            <div className="mapbox">
                <Map
                    style="mapbox://styles/nuclearglow/cjo65n9ox07f62ro3fl008h5v"
                    center={coordinates}
                    zoom={[17]}
                    pitch={[45]}
                    className="mapbox">
                    <Marker
                        coordinates={coordinates}
                        anchor="bottom"
                        className="marker">
                    </Marker>
                    <ScaleControl />
                    <ZoomControl className="zoom-control" />
                    <RotationControl className="rotation-control" />
                </Map>
            </div>
        );
    }
}

export default Mapbox;
