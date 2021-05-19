import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { UlStyled } from '../components/UIStyled'

import Layout from '../components/Layout'
import MainVisual from '../components/pages/index/MainVisual'
import AboutMe from '../components/pages/index/AboutMe'
import ImageSection from '../components/pages/index/ImageSection'
import SectionHeader from '../components/pages/SectionHeader'
import Works from '../components/pages/index/Works'
import SkillList from '../components/pages/index/SkillList'
import Experience from '../components/pages/index/Experience'
import BlogList from '../components/pages/index/BlogList'

export const IndexPageTemplate = ({ data, image, image2, works, image3, image4 }) => (
  <Fragment>
    <MainVisual image={image} />
    <AboutMe />
    <ImageSection
      image={image2}
      desc='Osaka Castle'
      time="Nov 2019"
    />
    <Works works={works} />
    <Experience />
    <BlogList />
  </Fragment>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        data={data}
        image={frontmatter.image}
        image2={frontmatter.image2}
        works={frontmatter.works}
        image3={frontmatter.image3}
        image4={frontmatter.image4}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        desc
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        works {
          title
          desc
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          github
        }
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
            }
          }
        }
      }
  }
`
