import styled from 'styled-components'
import { Link } from 'gatsby'

const SecTitle = styled.h1`
  font-weight: 900;
  font-size: 4rem;
  line-height: 2.8rem;
  text-align: center;
  color: #515151;
  padding-top: 12rem;
  text-transform: uppercase;
`

const SecDesc = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-align: center;
  color: #515151;
  margin-top: 3rem;
`

const StatTitle = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  color: #00a1ab;
  max-width: 100%;
  padding: 7.5rem 0 1rem 0;
  border-bottom: 1px solid #c4c4c4;
  margin: 0 0 2rem 2rem;
  text-transform: uppercase;
  position: relative;
`
const UlStyled = styled.ul`
  margin-left: 30px;
  font-size: 1rem;
  list-style-type: none;

  & li {
    margin-bottom: 3rem;
    padding-left: 1rem;
    position: relative;
    overflow: visible;

    &:before {
      position: absolute;
      left: -1.75rem;
      top: 2.2rem;
      content: '';
      height: 110%;
      width: 0;
      border-left: 1px solid #c4c4c4;
    }

    &:after {
      position: absolute;
      left: -1.95rem;
      top: 1rem;
      content: '';
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: #c4c4c4;
    }

    &:last-child:before {
      border: none;
    }

    & span {
      font-weight: 100;
    }
  }
`
const StatIcon = styled.span`
  font-size: 2rem;
  color: #ef75be;
  position: absolute;
  top: 7.7rem;
  left: -3.5rem;
  color: #c4c4c4;
`

const StyledLinkIcon = styled(Link)`
  &:link,
  &:visited {
    font-size: 4rem;
    color: #ef75be;
    display: inline-block;
    text-decoration: none;
    transition: all 0.2s;
    margin: 3rem 3rem 0 3rem;
  }

  &:hover {
    background-color: #ef75be;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(#000, 0.15);
    transform: translateY(-2px) scaleX(1.2) scaleY(1.2);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.15);
    transform: translateY(0);
  }
`

const StyledLinkIconA = styled.a`
  &:link,
  &:visited {
    font-size: 4rem;
    color: #ef75be;
    display: inline-block;
    text-decoration: none;
    transition: all 0.2s;
    margin: 3rem 3rem 0 3rem;
  }

  &:hover {
    background-color: #ef75be;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(#000, 0.15);
    transform: translateY(-2px) scaleX(1.2) scaleY(1.2);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.15);
    transform: translateY(0);
  }
`

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    font-size: 1.4rem;
    color: #ef75be;
    display: inline-block;
    text-decoration: none;
    transition: all 0.2s;
    font-weight: 900;
  }

  &:hover {
    background-color: #ef75be;
    color: #fff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

export {
  SecTitle,
  SecDesc,
  StatTitle,
  StyledLink,
  StyledLinkIcon,
  StatIcon,
  UlStyled,
  StyledLinkIconA,
}
