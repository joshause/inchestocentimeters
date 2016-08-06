# inchestocentimeters.js

JavaScript conversion of inches to centimeters.

[![Build Status](https://travis-ci.org/joshause/inchestocentimeters.svg?branch=master)](https://travis-ci.org/joshause/inchestocentimeters)
[![Codacy](https://api.codacy.com/project/badge/grade/5830a3190dd848b0a23ecc1dc31394a2)](https://www.codacy.com/app/joshua-ause/inchestocentimeters)
[![npm](https://img.shields.io/npm/v/centimeters-to-inches.svg)](https://www.npmjs.com/package/inches-to-centimeters)
[![npm](https://img.shields.io/npm/dm/centimeters-to-inches.svg)](https://www.npmjs.com/package/inches-to-centimeters)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Install

```
$ npm install inches-to-centimeters
```

## Usage

### Node.js

```js
var InchesToCentimeters = require("inches-to-centimeters");
var itc = new InchesToCentimeters();
itc.get(1);
// => 2.539999999997257
```

### Browser

(Add necessary `<script>` tag reference to `inchestocentimeters.js`)

```js
// InchesToCentimeters is autoloaded to window.InchesToCentimeters
var itc = new InchesToCentimeters();
itc.get(1);
// => 2.539999999997257
```

## Tests

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
