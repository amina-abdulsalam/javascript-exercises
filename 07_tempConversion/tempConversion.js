const convertToCelsius = function(tempf) {
  let converted = (tempf - 32) * (5/9);

  return Math.round(converted * 10)/10;
};

const convertToFahrenheit = function(tempc) {
  let converted = (tempc * (9/5)) + 32;

  return Math.round(converted * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
