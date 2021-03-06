import React from "react"
import {
  PositionContainer,
  FlexContainer,
  PositionImg,
  BackgroundColor,
  InfoContainer,
  TextContainer,
  PositionName,
  PositionDescription,
} from "./position-styles.js"

export default ({
  index,
  title,
  description,
  featuredImage,
  featuredImageAlt,
}) => (
  <PositionContainer index={index}>
    <FlexContainer>
      <PositionImg alt={featuredImageAlt} fluid={featuredImage.fluid} />
      <BackgroundColor index={index}></BackgroundColor>
    </FlexContainer>
    <InfoContainer>
      <TextContainer>
        <PositionName>{title}</PositionName>
        <PositionDescription>{description.description}</PositionDescription>
      </TextContainer>
    </InfoContainer>
  </PositionContainer>
)
