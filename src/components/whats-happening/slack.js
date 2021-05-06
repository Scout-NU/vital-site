import React from "react"
import Img from "gatsby-image"

import {
  SlackContainer,
  SlackContent,
  SlackImgHolder,
  SlackImg,
} from "./slack-styles"
import { Button } from "../../constants/buttons"
import { P } from "../../constants/typography"

const Slack = ({ title, link, logo, blurb }) => {
  return (
    <SlackContainer>
      <SlackImgHolder>
        <SlackImg src={logo.fluid.src} alt={logo.description}></SlackImg>
      </SlackImgHolder>
      <SlackContent>
        <P>{blurb}</P>
        <a href={link}>
          <Button type="button" primary={true}>
            {title}
          </Button>
        </a>
      </SlackContent>
    </SlackContainer>
  )
}

export default Slack