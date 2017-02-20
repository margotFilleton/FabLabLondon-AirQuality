import React, { Component } from 'react';
import './map.css';


class gmaps extends Component {




    componentDidMount() {
        const {lat, lng} = this.props.initialPosition;
        this.map = new window.google.maps.Map(this.refs.map, {
            center: {lat, lng},
            zoom: 16,
            mapTypeId: 'terrain'
        });

      /*  this.marker = new window.google.maps.Marker({
            position: {lat, lng},
            map: this.map,
            title: 'Hello World!'
        });*/



    }
    render() {
        return (

            <div>
                <div ref= "map" style={{with: 500, height:500}}>
                </div>

            </div>
        );
    }

}
export default gmaps;




