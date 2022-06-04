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
        'It is ' +
          body.current.weather_descriptions[0] +
          '. Currently ' +
          body.current.temperature +
          ' degrees out but it feels like ' +
          body.current.feelslike +
          ' degrees. ' +
          body.current.precip +
          ' % chance of rain with: ' +
          body.current.humidity +
          '% humidity.'
      );
    }
  });
};

module.exports = forecast;
