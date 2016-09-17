module.exports = {
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
	overrideStyles: ({rhythm}) => ({
		'h1,h2': {
			color: 'inherit',
			lineHeight: rhythm(2),
			marginTop: rhythm(2),
			marginBottom: rhythm(1)
		},
		'h3': {
			lineHeight: rhythm(2),
			marginTop: rhythm(1),
			marginBottom: rhythm(1)
		}
	})
};
