(function() {

  'use strict';

  var InchesToCentimeters = require('../inchestocentimeters.js');

  describe('inchestocentimeters.js', function() {

    it('is a thing', function() {
      expect(InchesToCentimeters).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of inches for number of centimeters given', function() {

        var itc = new InchesToCentimeters();
        var input = 1;
        var output = 0.393700787402;

        expect(
          itc.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
