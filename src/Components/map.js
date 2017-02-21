import React, { Component } from 'react';
import './map.css';
import firebase from 'firebase';

class gmaps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateSelected: [],
            dataDisplay: []
        };
    }


    readData (date) {
        firebase.database().ref('/data/'+date).once('value').then(response =>  {
            this.setState({
                dataDisplay: response.val()
            });
           // this.dataDisplay = snapshot.val();
        });
    }


    addPointToMap(lat,lng,value){
        this.heatmapData = [];

        var latLng = new window.google.maps.LatLng(lat,lng);
        this.heatmapData.push(latLng);
        var color = [];
        if(value <=1){
            color = [
                'rgba(255, 0, 0, 0)',
                'rgba(255, 0, 0, 1)'
            ];
        }
        else if(value <= 2)
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
            radius:100,
            maxIntensity:0.5
        });
    }


    componentDidMount() {
        const {lat, lng} = this.props.initialPosition;
        this.map = new window.google.maps.Map(this.refs.map, {
            center: {lat, lng},
            zoom: 16
        });
        this.readData("one");





    }
    render() {
        if(this.state.dataDisplay != null) {
            for (let key in this.state.dataDisplay) {
                this.addPointToMap(this.state.dataDisplay[key].lat,this.state.dataDisplay[key].lng,3);
            }
        }
        return (

            <div>
                <div ref="map" style={{with: 500, height:500}}>
                </div>
            </div>
        );

    }

}
export default gmaps;




