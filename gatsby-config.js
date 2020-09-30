/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My First Gatsby Project',
    author: 'Avinash Rathee'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}

/**
 * when insted of passing a string as a plugin, we pass objects, we still have 
 * to name the plugin, we do that by using resolve 
 */
/**
 *  __dirname comes from Node.js, as gatsby-config.js is a node.js file
 */