import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
};

const gmaps = React.createClass({

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    },

    onDragEnd(e) {
        console.log('onDragEnd', e);
    },

    onCloseClick() {
        console.log('onCloseClick');
    },

    onClick(e) {
        console.log('onClick', e);
    },

    render() {
        return (
            <Gmaps
                width={'1800px'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={12}
                loadingMessage={'Loading'}
                params={{v: '3.exp', key: 'YOUR_API_KEY'}}
                onMapCreated={this.onMapCreated}>
               
            </Gmaps>
        );
    }

});

export default gmaps;




