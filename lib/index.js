'use strict';

const postcss = require('postcss');
const Typography = require('typography');
const assign = require('object-assign');

const defaultSettings = {
	includeNormalize: false
};

module.exports = postcss.plugin('typography', function (settings) {
	const theseSettings = assign({}, defaultSettings, settings || {});

	const typography = new Typography(theseSettings);

	return function execute(css) {
		css.walkAtRules('typography', function (rule) {
			const overrides = rule.nodes || [];

			const root = postcss.parse(typography.toString());

			root.append(overrides);
			rule.replaceWith(root);
		});
	};
});
