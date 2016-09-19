'use strict';

var postcss = require('postcss');
var Typography = require('typography');
var assign = require('object-assign');

var defaultSettings = {
	includeNormalize: false
};

module.exports = postcss.plugin('typography', function (settings) {
	var theseSettings = assign({}, defaultSettings, settings || {});

	var typography = new Typography(theseSettings);

	return function execute(css) {
		css.walkAtRules('typography', function (rule) {
			var overrides = rule.nodes || [];

			var root = postcss.parse(typography.toString());

			root.append(overrides);
			rule.replaceWith(root);
		});
	};
});
