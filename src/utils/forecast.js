const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=420a6bca9d86a79eea610fe795fec3b6&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services', undefined);
    } else if (body.error) {
      callback('Location not found', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ' It is currently ' +
          body.current.temperature +
          ' degrees out. There is a ' +
          body.current.precip +
          '% chance of rain'
      );
    }
  });
};

module.exports = forecast;
