import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size, devices } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    padding-left: 35px;
  }
  @media ${devices.tablet} {
    padding-left: 75px;
  }
  padding-top: 170px;
  padding-bottom: 45px;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  opacity: ${props => (props.imageBool ? "1" : "0")};
`

const BackgroundShape = styled.img`
  transform: rotate(11deg);
  @media (max-width: 1200px) {
    opacity: ${props => (props.title.length > 15 ? "0" : "1")};
  }
  @media (max-width: ${size.laptop}px) {
    opacity: 0;
  }
`

export { HeaderContainer, TextContainer, ImageContainer, BackgroundShape }
