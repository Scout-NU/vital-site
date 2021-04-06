import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fonts } from "../../constants/typography"
import { white, navyBlue, darkGray, periwinkle } from "../../constants/colors"
import { animations } from "../../constants/animations"
import { devices } from "../../constants/devices"

const NavWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  background-color: transparent;
  @media ${devices.mobile} {
    padding: 10px 35px;
  }
  @media ${devices.tablet} {
    padding: 15px 75px;
  }
  padding: 15px 75px;
  align-items: center;
  font-family: ${fonts.nav};
  height: 90px;
  width: 100%;
`

const NavBrandWrapper = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const FlexColumn = styled.div`
  flex: 1;
  display: flex;
  &:nth-child(1) {
    justify-content: flex-start;
  }
  &:nth-child(2) {
    justify-content: center;
  }
  &:nth-child(3) {
    justify-content: flex-end;
  }
`

const NavLink = styled(Link)`
  color: ${props => (props.navbarStyle === "gradient" ? white : navyBlue)};
  font-size: 14px;
  letter-spacing: 0.1em;
  font-family: ${fonts.nav};
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
  margin-left: 25px;
  margin-right: 25px;
  :hover {
    transition: all 0.2s;
    color: black;
  }
`

const NavBrand = styled.span`
  color: ${darkGray};
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none
  margin-left: 20px;
  vertical-align: middle;
`

const NavButton = styled.button`
  justify-self: flex-end;
  background-color: transparent;
  font-family: ${fonts.button};
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => (props.navbarStyle === "gradient" ? white : navyBlue)};
  font-weight: 300;
  border: 1px solid;
  border-color: ${props =>
    props.navbarStyle === "gradient" ? white : navyBlue};
  padding: 9px 28px;
  border-radius: 20px;
  z-index: 10;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

const NavigationLinks = styled.div`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`

const SmallNavLinkContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    position: relative;
    display: inline-flex;
    float: right;
    margin: 3.25rem 1.5rem 0rem 0rem;
    z-index: 1;
  }
  @media ${devices.tablet} {
    display: none;
  }
`

const fadeIn = keyframes`
  0% { opacity: 0%; }
  100% { opacity: 100%; }
`

const fadeOut = keyframes`
  0% { opacity: 100%; }
  100% { opacity: 0%; }
`

const SmallMenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  background: ${periwinkle};
  top: 1rem;
  right: 1rem;
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: blue;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  animation: ${props => (props.out ? fadeOut : fadeIn)}
    ${animations.navBarFadeLength}s 1;

  @media ${devices.laptop} {
    display: none;
  }
`

const SmallLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 1rem 0;
  > * {
    margin: 1rem;
  }
`

const CrossContainer = styled.div`
  position: relative;
  margin: 0.4rem auto auto 85%;
  &:hover {
    cursor: pointer;
  }
`

export {
  NavWrapper,
  NavBrandWrapper,
  NavLink,
  NavBrand,
  NavButton,
  FlexColumn,
  NavigationLinks,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
}
