import React from 'react'
import styled from 'styled-components'
import colors from '../../style/color'

const GreenDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${colors.red[500]};
  border-radius: 50%;
  margin: 1rem 0.5rem 0 0;
`
const GreyDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin: 1rem 0.5rem 0 0;
`

const IconGroup = styled.div`
  display: flex;
`

const StyledWrapper = styled.div`
  display: flex;
  color: #515151;
  font-weight: bold;
  width: 100%;
`

const SkillName = styled.p`
  min-width: 150px;
`

const SkillDesc = styled.p`
  margin-left: 20px;
  font-weight: normal;
`

const SkillList = ({ name, desc, point }) => {
  const score = []
  for (var i = 0; i < 5; i++) {
    if (point > 0) {
      score.push(<GreenDot />)
      point--
    } else {
      score.push(<GreyDot />)
    }
  }

  return (
    <StyledWrapper>
      <SkillName>{name}</SkillName>
      <IconGroup>{score}</IconGroup>
      <SkillDesc>{desc}</SkillDesc>
    </StyledWrapper>
  )
}

export default SkillList
