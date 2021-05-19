import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SectionHeader from '../SectionHeader'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import styled from 'styled-components'
import colors from '../../style/color'

const BlogList = ({
  data
}) => {
  const { edges: posts } = data.allMarkdownRemark

  // post.frontmatter.featuredpost

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

  const ButtonMore = styled(Link)`
    display: inline-block;
    text-align: center;
    margin-top: 1rem;
    padding: 0.7rem 2rem;
    border-radius: 25px;
    border: 1px solid ${colors.red[600]};
    transition: all 0.25s;
    font-weight: 700;
    color: ${colors.gray[800]};

    &:hover {
      border: 1px solid ${colors.red[100]};
      background-color: ${colors.red[500]};
      color: ${colors.white}; 
    }
  `

  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `


  return (
    <div className="mt-64 py-64 bg-gray-100">
      <SectionHeader>Blog</SectionHeader>
      <ContentContainer className="clearfix mx-auto w-4/5 mt-40">
        {posts &&
          posts.slice(0, 4).map(({ node: post }) => (
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
      <ButtonContainer>
        <ButtonMore to={'/blog'}>See More</ButtonMore>
      </ButtonContainer>
    </div>   
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    render={(data, count) => <BlogList data={data} count={count} />}
  />
)
