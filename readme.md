# postcss-typography

A postcss plugin for [**typography.js**][typography]

## Installation

[npm][]:

```bash
npm install postcss-typography
```

## Usage

Dependencies:

```javascript
var postcss = require('postcss');
var typography = require('postcss-typography');
```

Use:

```javascript
var processor = postcss().use(typography(options));
```

Process:

```javascript
processor.process(css).then(function (result) {
	console.log(result.css);
});
```

Yields:

```css
* {
	...
}
*:before {
	...
}
*:after {
	...
}
body {
	...
}
img {
	...
}
h1 {
	...
}
h2 {
	...
}
...
```

## API

### `typography([options])`

### `options`

Options to pass through to the [typography api][typography#api]

### `@typography`

This plugin will replace the `@typography` 'at-rule' with the output of typography.js. Any declarations within the at-rule block will be merged with the final css output.

## License

[MIT][license] © [Jonathan Haines][author]

<!-- Definitions -->

[typography]: https://github.com/KyleAMathews/typography.js

[typography#api]: https://github.com/KyleAMathews/typography.js#api

[license]: LICENSE

[author]: http://barrythepenguin.github.io

[npm]: https://docs.npmjs.com/cli/install
