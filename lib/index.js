'use strict';

const postcss = require('postcss');
const Typography = require('typography');

module.exports = postcss.plugin('typography', settings => {
	const typography = new Typography(settings);

	return function (css) {
		css.walkAtRules('typography', rule => {
			const overrides = rule.nodes || [];

			const root = postcss.parse(typography.toString());

			root.append(overrides);
			rule.replaceWith(root);
		});
	};
});
