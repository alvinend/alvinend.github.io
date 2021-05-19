import React from 'react'
import SectionHeader from '../SectionHeader'
import styled from 'styled-components'
import colors from '../../style/color'
import layouts from '../../style/layouts'

const StyledDiv  = styled.div `
  padding: 16rem 0;
  background-color: ${colors.gray[100]};

  .list-container {
    margin-top: 10rem;

    .list-section-container {
      width: 80vw;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      margin: 5rem auto 0 auto;
      background-color: ${colors.white};
      ${layouts.clearfix}
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 3rem 0;

      @media only screen and (max-width: 1024px) {
        justify-content: center;
        text-align: center;
      }

      .image-frame {
        width: 10rem;
        margin: 0 4rem;
      }

      .text-frame {
        margin: 0 1.5rem;

        h1 {
          font-size: 1.5rem;
          color: ${colors.red[500]};
          font-weight: 600;
          margin: 1rem 0;
        }

        a {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.7rem  1.5rem;
          border-radius: 25px;
          border: 1px solid ${colors.gray[500]};
          transition: all 0.25s;

          &:hover {
            border: 1px solid ${colors.red[100]};
            background-color: ${colors.red[500]};
            color: ${colors.white}; 
          }
        }
      }

    }
  }
  
`

const Works = ({ works }) => {
  return (
    <StyledDiv>
      <SectionHeader>Works</SectionHeader>
      <div className="list-container">
        {works.map(work => (
          <div className="list-section-container">
            <div className="image-frame">
              <img
                src={
                  !!work.image.childImageSharp
                    ? work.image.childImageSharp.fluid.src
                    : work.image
                }
              />
            </div>
            <div className="text-frame">
              <h1>{work.title}</h1>
              <p>{work.desc}</p>
              <a href={work.github}>Go To Github</a>
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  )
}

export default Works
