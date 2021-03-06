import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 8px ${padding.laptop};
    display: flex;
    align-items: center;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding: 8px ${padding.desktop};
  }
`

const TextContainer = styled.div`
  @media ${devices.tabletMax} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    padding-right: 50px;
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 46%;
  }
`

const Image = styled(Img)`
  height: 100%;
  @media ${devices.laptop} {
    padding-right: 50px;
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 54%;
  }
`

export { Container, TextContainer, Image }
