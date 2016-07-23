import React from 'react';
import {
  AppRegistry,
  View,
  MapView,
  StyleSheet
} from 'react-native';

var Weather = React.createClass({
  getInitialState : function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  },
  render : function() {
    return <MapView
      annotations={[this.state.pin]}
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });
  }
});

var styles = StyleSheet.create({
  map : {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
