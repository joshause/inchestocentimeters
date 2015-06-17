// inchestocentimeters.js v1.0.0

(function() {

  'use strict';

  var InchesToCentimeters = function() {};

  InchesToCentimeters.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x / 0.393700787402;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = InchesToCentimeters;
    } else {
      exports.InchesToCentimeters = InchesToCentimeters;
    }
  } else {
    window.InchesToCentimeters = InchesToCentimeters;
  }

})();
