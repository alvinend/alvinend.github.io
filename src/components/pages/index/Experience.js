import React from 'react'
import SectionHeader from '../SectionHeader'
import { UlStyled } from '../../UIStyled'
import SkillList from './SkillList'
import styled from 'styled-components'
import colors from '../../style/color'

const Experience = () => {

  const Title = styled.h2`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;

    @media only screen and (max-width: 1024px) {
      text-align: center;
    }
  `

  const PersonalityContainer = styled.div`
    text-align: left;
    width: 430px;

    &a {
      color: ${colors.red[500]}
    }

    & h3 {
      font-size: 26px;
      font-weight: 900;
      color: ${colors.red[500]}
    }

    & b{
      font-size: 20px;
      margin: 0 5px;
    }
  `

  const OuterWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
  `

  const InnerWrapper = styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
      justify-content: center;
    }
  `

  const ItemWrapper = styled.div`
    width: 45%;
    margin-bottom: 30px;

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  `

  return (
    <div className="mt-64 w-screen">
      <SectionHeader>Background</SectionHeader>
      <OuterWrapper>
        <InnerWrapper>
          <ItemWrapper>
            <Title>Education</Title>
            <UlStyled>
              <li>
                <b>Japanese</b> | 2016.08 - 2018.03
                <br />
                OBKG
                <br />
              </li>
              <li>
                <b>Computer Science/ Network</b> | 2018.04 - 2021.03 <br />
                Kyoto Computer Collage
                <br />
              </li>
              <li>
                <b>Master Program / Computer Network Management</b> | 2021.03 - Now <br />
                Kyoto Information Graduate School
                <br />
              </li>
            </UlStyled>
          </ItemWrapper>
          <ItemWrapper>
            <Title>Experience</Title>
            <UlStyled>
              <li>
                <b>Part-Time</b> | 2016.08 - 2019.10
                <br />
                Torikizoku
                <br />
              </li>
              <li>
                <b>Intern Front Engineer</b> | 2019.11 - 2020.06 <br />
                Baseconnect
                <br />
              </li>
              <li>
                <b>Intern Full-Stack Engineer</b> | 2020.06 - Now <br />
                Baseconnect
                <br />
              </li>
            </UlStyled>
          </ItemWrapper>
          <ItemWrapper>
            <Title>Certification</Title>
            <UlStyled>
              <li>
                <b>Japanese Language Proficieny Test (JLPT) N1</b> | 2017.11
                <br />
                Test to evaluate and certify Japanese language proficiency for non-native speakers
                <br />
              </li>
              <li>
                <b>基本技術者試験</b> | 2018.06 <br />
                Japan  National Examination: Basic Engineer Exam 
                <br />
              </li>
              <li>
                <b>AWS Certified Cloud Practitioner (CLF)</b> | 2021.02<br />
                AWS Exam
                <br />
              </li>
              <li>
                <b>AWS Certified Developer - Associate (DVA)</b> | 2021.05<br />
                AWS Exam
                <br />
              </li>
              <li>
                <b>AWS Certified Solutions Architect - Associate (SAA)</b> | 2021.06<br />
                AWS Exam
                <br />
              </li>
            </UlStyled>
          </ItemWrapper>
          <ItemWrapper>
            <Title>Skill</Title>
            <SkillList
              name="Javascript"
              desc="Love Javascript!"
              point={5}
            />
            <SkillList name="React" desc="Use it almost everyday" point={4} />
            <SkillList name="CSS" desc="Frontend stuff" point={4} />
            <SkillList name="Server" desc="Deploying, Installing Server etc" point={3} />
            <SkillList name="Node.Js/Express" desc="Backend stuff" point={3} />
            <SkillList name="Ruby(RoR)" desc="Learning.." point={2} />
            <SkillList name="Java" desc="JavaFX, Tomcat" point={2} />
            <SkillList name="Swift" desc="Used for fun (Not anymore)" point={2}/>
            <SkillList name="PHP" desc="I know it..." point={1} />
          </ItemWrapper>
          <ItemWrapper>
            <Title>Personality</Title>
            <PersonalityContainer>
              (Tested by <a href="https://www.16personalities.com/istp-personality">16personalities</a>)<br/>
              <h3><a href="https://www.16personalities.com/istp-personality">“The Virtuoso” (ISTP-T)</a></h3><br/>
              60%<b>Introverted</b>
              58%<b>Observant </b>
              56%<b>Thinking</b>
              51%<b>Prospecting </b>
              69%<b>Turbulent</b><br/><br/>
              Role<b>Explorer</b><br/>
              Strategy 	<b>Constant Improvement</b>
            </PersonalityContainer>
          </ItemWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </div>
  )
}

export default Experience
