# inchestocentimeters.js

JavaScript conversion of inches to centimeters.

## Usage

### Node.js

```js
var InchesToCentimeters = require("./inchestocentimeters");
var itc = new InchesToCentimeters();
itc.get(1);
// => 0.393700787402
```

### Browser

(Add necessary `<script>` tag reference to `inchestocentimeters.js`)

```js
// InchesToCentimeters is autoloaded to window.InchesToCentimeters
var itc = new InchesToCentimeters();
itc.get(1);
// => 0.393700787402
```

## Tests

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
