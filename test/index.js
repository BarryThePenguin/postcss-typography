var fs = require('fs');
var path = require('path');

var test = require('tape');
var postcss = require('postcss');
var typography = require('..');

var read = fs.readFileSync;
var join = path.join;

var ROOT = join(__dirname, 'fixtures');

var fixtures = fs.readdirSync(ROOT);

test('typography()', function (t) {
	t.is(typeof typography, 'function', 'should be a function');

	t.doesNotThrow(function () {
		typography();
	}, '');

	t.end();
});

test('fixtures', function (t) {
	fixtures.filter(function (filepath) {
		return filepath.indexOf('.') !== 0;
	}).forEach(function (fixture) {
		var filepath = join(ROOT, fixture);
		var output = read(join(filepath, 'output.css'), 'utf-8');
		var input = read(join(filepath, 'input.css'), 'utf-8');
		var config = require(join(filepath, 'config.js'));
		var processor = postcss([typography(config)]);
		var result = processor.process(input).css;

		t.deepEqual(result, output, 'should work on `' + fixture + '`');
	});

	t.end();
});
