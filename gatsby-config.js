module.exports = {
  siteMetadata: {
    title: `ロボ団いりなか校ポートフォリオサイト`,
    author: {
      name: `ロボ団いりなか校`,
      summary: `名古屋の名鉄鶴舞線いりなか駅すぐにあるプログラミング教室ロボ団いりなか校です。`,
    },
    openGraphImage: `media/logo/robodone_logo.png`,
    description: `ロボットプログラミングスクールのロボ団いりなか校で、
    2022年度から生徒や先生がこれまでに制作してきた制作中のアプリやゲームを紹介しています。
    アプリやゲームの説明に加えてソースコードを閲覧することが出来たり、実際に遊ぶことができます。`,
    siteUrl: `https://irinaka-pf-2023.vercel.app/`,
    social: {
      github: `irinaka-robodone`,
    },
    socialLinks: [
      {
        name: "github",
        url: "https://github.com/irinaka-robodone",
      },
      {
        name: "ロボ団いりなか校HP",
        url: "https://www.meigakukan.co.jp/robo-done/",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "apps",
        path: `${__dirname}/content/apps`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: "static",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-prismjs-copy-button`,
                `gatsby-remark-prismjs`,
              ],
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/netlify-cms/index.js`,
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Content Manager",
        includeRobots: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `Gatsby Glass RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`, `Poppins\:400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/nyan_GJ.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-9HL6JDF3WP"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
