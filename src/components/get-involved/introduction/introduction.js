import React from "react"
import { P } from "../../../constants/typography"
import { Container, TextContainer, ImageContainer } from "./introduction-styles"
import svg_shape from "../../../images/get-involved/intro_shape.svg"

const Introduction = ({ blurb }) => {
  return (
    <Container>
      <TextContainer>
        <P>{blurb}</P>
      </TextContainer>
      <ImageContainer>
        <img src={svg_shape} alt="geometric black and white shape" />
      </ImageContainer>
    </Container>
  )
}

export default Introduction
