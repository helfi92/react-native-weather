var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f8936c7648f4178d4a00e2001fbc09f4';
import _ from 'lodash';

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F';
};

module.exports = function(latitude, longitude) {
  var url = rootUrl + '&lat=' + latitude + '&lon=' + longitude;

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      };
    })
    .catch((error) => {
      console.log('err: ', error);
    })
};
