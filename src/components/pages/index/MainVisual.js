import React from 'react'
import styled from 'styled-components'

const MainVisualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
`

const MainVisualText = styled.div`
  text-shadow: 4px 4px 8px black;
  color: white;
`

const MainVisual = ({ image }) => {
  return (
    <div>
      <MainVisualWrapper
        className="font-bold h-screen text-center"
        backgroundUrl={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      >
        <MainVisualText>
          Hi my name is
          <h1 className="text-6xl font-black">Endratno Alvin</h1>
          <p>Indonesian who love coffee and dogs! also sometimes code....</p>
        </MainVisualText>
      </MainVisualWrapper>
    </div>
  )
}

export default MainVisual
