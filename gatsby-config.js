module.exports = {
    siteMetadata: {
        title: `MyBlog`,
    },

    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/blog/`,
            },
        },
        `gatsby-plugin-glamor`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};