module.exports = {
	darkMode: 'class',
	content: ['./*.html'],
	theme: {
		screens: {
			'lg': { 'max': '992px' },
			'md': { 'max': '768px' },
			'sm': { 'max': '480px' }
		},
		container: {
			center: true,
			padding: '20px',
		},
		extend: {
			colors: {
				lightblack: '#4D4244',
				lightred: '#ff0d38',
				darkred: '#d70026',
				lightgray: '#767474',
				darkgray: '#272727',
			},
			boxShadow: {
				'customShadowRed': '0px 0px 30px rgba(255, 13, 56, 0.21);'
			}
		},
	},
	plugins: [],
}
