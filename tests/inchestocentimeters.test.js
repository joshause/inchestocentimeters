(function() {

  'use strict';

  var InchesToCentimeters = require('../inchestocentimeters.js');

  describe('inchestocentimeters.js', function() {

    it('is a thing', function() {
      expect(InchesToCentimeters).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of centimeters for number of inches given', function() {

        var itc = new InchesToCentimeters();
        var input = 1;
        var output = 2.539999999997257;
        expect(
          itc.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

}());
