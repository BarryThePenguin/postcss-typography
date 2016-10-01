module.exports = {
	includeNormalize: false,
	googleFonts: [{
		name: 'EB Garamond',
		styles: [
			'400'
		]
	}, {
		name: 'Open Sans',
		styles: [
			'400',
			'400i'
		]
	}],
	headerFontFamily: ['Open Sans', 'sans-serif'],
	bodyFontFamily: ['EB Garamond', 'sans-serif'],
	baseFontSize: '20px',
	headerWeight: 400,
	bodyWeight: 400,
	overrideStyles: function (typography) {
		return {
			'h1,h2': {
				color: 'inherit',
				lineHeight: typography.rhythm(2),
				marginTop: typography.rhythm(2),
				marginBottom: typography.rhythm(1)
			},
			'h3': {
				lineHeight: typography.rhythm(2),
				marginTop: typography.rhythm(1),
				marginBottom: typography.rhythm(1)
			}
		};
	}
};
