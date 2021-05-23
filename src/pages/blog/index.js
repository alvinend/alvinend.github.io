import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import styled from 'styled-components'
import colors from '../../components/style/color'
import { Helmet } from 'react-helmet'


const Article = styled.article`
  display: inline-block;
  width: 45%;
  margin-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 40px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`

const Title = styled.p`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 10px;

  & span {
    font-size: 14px;
    background-color: ${colors.red[500]};
    color: ${colors.white};
    margin-left: 10px;
    padding: 2px 8px;
    border-radius: 20px;
    vertical-align: middle;
  }
`

const Desc = styled.p`
  & a {
    color: ${colors.red[500]};
  }
`

const BlogIndexPage = ({
  data
}) => {
  const { edges: posts } = data.allMarkdownRemark

  // post.frontmatter.featuredpost

  return (
    <ContentContainer className="clearfix mx-auto w-4/5 mt-40">
      <Helmet title={`Blogs | ${data.site.siteMetadata.title}`} />
      {posts &&
        posts.map(({ node: post }) => (
            <Article key={post.id}>
              <header>
                {post.frontmatter.featuredimage ? (
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                ) : null}
              </header>
              <Title>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span>
                  {post.frontmatter.date}
                </span>
              </Title>
              <Desc>
                {post.excerpt}
                <Link to={post.fields.slug}>
                  Keep Reading
                </Link>
              </Desc>
            </Article>
        ))
      }
    </ContentContainer>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogIndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 480, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogIndexPage data={data} count={count} />}
  />
)
