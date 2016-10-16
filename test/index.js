const fs = require('fs');
const path = require('path');

const test = require('tape');
const postcss = require('postcss');
const typography = require('..');

const read = fs.readFileSync;
const join = path.join;

const ROOT = join(__dirname, 'fixtures');

const fixtures = fs.readdirSync(ROOT);

test('typography()', t => {
	t.is(typeof typography, 'function', 'should be a function');

	t.doesNotThrow(() => {
		typography();
	}, '');

	t.end();
});

test('fixtures', t => {
	fixtures.filter(filepath => {
		return filepath.indexOf('.') !== 0;
	}).forEach(fixture => {
		const filepath = join(ROOT, fixture);
		const output = read(join(filepath, 'output.css'), 'utf-8');
		const input = read(join(filepath, 'input.css'), 'utf-8');
		// eslint-disable-next-line import/no-dynamic-require
		const config = require(join(filepath, 'config.js'));
		const processor = postcss([typography(config)]);
		const result = processor.process(input).css;

		t.deepEqual(result, output, 'should work on `' + fixture + '`');
	});

	t.end();
});
