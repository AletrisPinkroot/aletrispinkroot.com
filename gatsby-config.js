module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.aletrispinkroot.com',
		title: 'Aletris Pinkroot',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: ['G-N8FM65T6S3'],
				gtagConfig: {
					optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					respectDNT: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.aletrispinkroot.com',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
