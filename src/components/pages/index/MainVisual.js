import React from 'react'

const MainVisual = ({ image }) => {
  return (
    <div>
      <div
        className="text-green-100 bg-green-500 pt-64 font-bold h-screen text-center"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: 'center',
        }}
      >
        <div
          className=""
          style={{
            textShadow: '1px 1px 2px black',
          }}
        >
          Hi my name is
          <h1 className="text-6xl font-black">Endratno Alvin</h1>
          <p>Just a man who think he is funny and really love coding</p>
        </div>
      </div>
    </div>
  )
}

export default MainVisual
