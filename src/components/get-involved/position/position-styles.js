import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../../constants/devices"
import { PCard, H2 } from "../../../constants/typography"
import { beauBlue, periwinkle, royalBlue } from "../../../constants/colors"

function backgroundColor(index) {
  if (index === 0 || index % 3 === 0) {
    return beauBlue
  } else if ((index + 1) % 3 === 0) {
    return periwinkle
  } else {
    return royalBlue
  }
}

const fontSizes = {
  title: `calc(
    17px + (23 - 17) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  )`,
}

const PositionContainer = styled.div`
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  @media ${devices.mobile} {
    width: 100vw;
    height: 16rem;
    margin-left: 30px;
  }
  @media ${devices.tablet} {
    width: 75vw;
    height: 18rem;
    margin-left: 40px;
  }
  @media ${devices.laptop} {
    width: 40vw;
    height: 15rem;
    margin-left: ${props => (props.index % 2 === 0 ? "75px" : "50px")};
  }
  @media ${devices.desktop} {
    height: auto;
    margin-bottom: 0.5rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  float: left;
  width: 30%;
`

const PositionImg = styled(Img)`
  display: inline-block;
  width: 91%;
  height: auto;
`

const BackgroundColor = styled.div`
  width: 9%;
  background-color: ${props => backgroundColor(props.index)};
`

const InfoContainer = styled.div`
  display: flex;
  position: relative;
  padding-left: 25px;
  width: 70%;
  @media ${devices.mobile} {
    justify-content: normal;
  }
`

const TextContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding-bottom: 0px;
  word-wrap: break-word;
`

const PositionName = styled(H2)`
  font-size: ${fontSizes.title};
  color: #133e6c;
  @media ${devices.tablet} {
    padding-top: 10px;
  }
  line-height: 30px;
  margin-bottom: 12px;
`

const PositionDescription = styled(PCard)`
  line-height: 21px;
  @media ${devices.mobile} {
    padding-right: 40px;
  }
  @media ${devices.tablet} {
    padding-right: 0px;
  }
`

export {
  PositionContainer,
  FlexContainer,
  PositionImg,
  BackgroundColor,
  InfoContainer,
  TextContainer,
  PositionName,
  PositionDescription,
}
