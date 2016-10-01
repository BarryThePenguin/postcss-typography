'use strict';

var postcss = require('postcss');
var Typography = require('typography');

module.exports = postcss.plugin('typography', function (settings) {
	var typography = new Typography(settings);

	return function execute(css) {
		css.walkAtRules('typography', function (rule) {
			var overrides = rule.nodes || [];

			var root = postcss.parse(typography.toString());

			root.append(overrides);
			rule.replaceWith(root);
		});
	};
});
