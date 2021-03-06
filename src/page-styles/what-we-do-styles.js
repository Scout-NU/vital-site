import styled from "styled-components"
import { GeoshapeContainer } from "../components/geoshape/geoshape-styles"
import { devices, padding } from "../constants/devices"

const ProgrammingCardsIntro = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
    margin: 4rem 0 0 0;
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
    margin-top: 5rem;
  }
  @media ${devices.laptop} {
    margin-top: 6.5rem;
  }
  @media ${devices.desktop} {
    margin-top: 7rem;
  }
`

const CardsContainer = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
    display: inline-block;
    justify-content: center;
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
  }
  @media ${devices.laptop} {
    display: flex;
    justify-content: center;
    padding: 0 5.7% 50px;
  }
  @media ${devices.desktop} {
    padding: 10px 8% 50px;
  }
`

const GeoshapeMobile = styled.img`
  position: absolute;
  z-index: -20;
  margin-top: ${props => props.marginTop};
  ${({ right }) =>
    right &&
    `
  right: 0;
  `}
`

const GeoshapeContainerMobile = styled(GeoshapeContainer)`
  @media ${devices.mobile} {
    display: block;
  }
  @media ${devices.tablet} {
    display: none;
  }
`

export {
  ProgrammingCardsIntro,
  CardsContainer,
  GeoshapeMobile,
  GeoshapeContainerMobile,
}
