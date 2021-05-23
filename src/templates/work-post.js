import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import colors from '../components/style/color'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { IoIosHome } from 'react-icons/io'

const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 40px auto;

  & a {
    margin-top: 30px;
    font-size: 24px;
    color: ${colors.red[500]};
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  border-top: 3px solid ${colors.gray[400]};
  padding-top: 30px;

  & > div {
    border: 1px solid ${colors.gray[500]};
    padding: 4px 8px;
    border-radius: 10px;
    line-height: 1.2;
    margin-right: 10px;
  }

`

const HeaderContainer = styled.div`
  padding-bottom: 15px;
  border-bottom: 3px solid ${colors.gray[400]};
  margin-bottom: 45px;
  font-size: 24px;
  color: ${colors.gray[600]};
`

const BlogTitle = styled.h1`
  font-size: 52px;
  color: ${colors.red[600]};
  font-weight: 900;
  line-height: 1.2;
`

const BodyContent = styled.body`
  & h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 15px 0;
  }

  & h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
  }

  & img {
    padding: 30px 0;
  }
`

const ImageFrame = styled.div`
  margin-bottom: 45px;
`

const HomeButton = styled(Link)`
  &&& {
    position: fixed;
    top: 2%;
    right: 5%;
    font-size: 32px;
    color: white;
    border-radius: 50%;
    padding: 5px;
    background-color: ${colors.gray[800]};
    opacity: 0.3;
    z-index: 5;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
    }
  }
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
  featuredimage
}) => {
  // const PostContent = contentComponent || Content

  console.log(tags)

  return (
    <section>
      {helmet || ''}
      <ContentWrapper>
        <HomeButton><IoIosHome /></HomeButton>
        <div>
          <div>
            <HeaderContainer>
              <BlogTitle>{title}</BlogTitle>
              <span>{date}</span>
            </HeaderContainer>
            <ImageFrame>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
            </ImageFrame>
            <BodyContent dangerouslySetInnerHTML={{ __html: content }} />
            <Link to="/blog">See other posts</Link>
            {tags && <TagContainer>{tags.map(tag => <div>{tag}</div>)}</TagContainer>}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`