import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGFicm93bmUyIiwiYSI6ImNqbHNiZWs1cjBja2Ezd283a2lxd3N6dzQifQ.81kKIz3Ibrb_JR_NQfFXGQ';
const RESTAURANTS 

class Map extends Component {

    constructor(props) {
      super(props);
  
      // set the initial state
      this.state = {
        restaurants: [],
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          latitude: '',
          longitude: '',
          zoom: 12,
          pitch: 2
        }
      }

    
    }
    render() {
        return
    }
}