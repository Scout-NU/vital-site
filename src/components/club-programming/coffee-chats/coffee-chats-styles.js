import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 110px ${padding.laptop} 8px 150px;
    align-items: center;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-left: 190px;
    padding-right: ${padding.desktop};
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 55%;
    order: 1;
    padding-left: 70px;
    padding-right: 85px;
  }
  @media (min-width: 1200px) {
    padding-left: 80px;
    padding-right: 95px;
  }
  @media ${devices.desktop} {
    padding-left: 130px;
    padding-right: 180px;
  }
`

export { Container, TextContainer }
