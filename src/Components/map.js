import React, { Component } from 'react';
import './map.css';


class gmaps extends Component {

    addPointToMap(lat,lng,value){
        this.heatmapData = [];

        var latLng = new window.google.maps.LatLng(lat,lng);
        this.heatmapData.push(latLng);
        var color = [];
        if(value == 1){
            color = [
                'rgba(255, 0, 0, 0)',
                'rgba(255, 0, 0, 1)'
            ];
        }
        else if( value == 2)
        {
            color = [
                'rgba(255, 100, 10, 0)',
                'rgba(255, 100, 10, 1)'
            ];
        }
        else
        {
            color = [
                'rgba(0, 255, 0, 0)',
                'rgba(0, 255, 0, 1)'
            ];
        }
        this.heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: this.heatmapData,
            dissipating: true,
            map: this.map,
            gradient: color,
            radius:100
        });
    }


    componentDidMount() {
        const {lat, lng} = this.props.initialPosition;
        this.map = new window.google.maps.Map(this.refs.map, {
            center: {lat, lng},
            zoom: 16
        });
        this.addPointToMap(51.5248541,-0.08040660000006028,3);
        this.addPointToMap(51.5258541,-0.08040660000006028,2);
        this.addPointToMap(51.5268541,-0.08331660000006028,3);
        this.addPointToMap(51.5268541,-0.08222760000006028,3);
        this.addPointToMap(51.5268541,-0.08113860000006028,3);

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




