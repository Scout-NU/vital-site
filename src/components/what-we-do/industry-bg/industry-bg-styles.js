import styled from "styled-components"
import { size } from "../../../constants/devices"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 80px;
  @media (max-width: ${size.tablet}px) {
    display: block;
  }
`

const TextContainer = styled.div`
  width: 45%;
  padding-top: 50px;
  padding-right: 30px;
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 55%;
  @media (max-width: ${size.laptop}px) {
    padding-top: 20px;
  }
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const Image = styled.img`
  max-height: 100%;
`

export { Container, TextContainer, ImageContainer, Image }
