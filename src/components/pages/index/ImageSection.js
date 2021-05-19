import React from 'react'
import styled from 'styled-components'

const ImageFrame = styled.div`
  height: 80vh;
  background-position: center;
  background-size: cover;
`

const ImageSection = ({ image, desc, time, backgroundPosition, className }) => {
  return (
    <div className={className ? className : 'mt-64'}>
      <ImageFrame
        className="table-cell align-bottom w-screen"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
        <h3
          className="text-xl font-bold text-gray-100 text-right mr-20 mb-10"
          style={{
            textShadow: '1px 1px 2px black',
          }}
        >
          {desc}
          <br />
          <span>- {time}</span>
        </h3>
      </ImageFrame>
    </div>
  )
}

export default ImageSection
