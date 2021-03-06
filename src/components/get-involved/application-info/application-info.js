import React from "react"
import { P } from "../../../constants/typography"
import {
  GeoshapeApplication,
  ApplicationContainer,
  H2Header,
  MobileImageContainer,
} from "./application-info-styles"
import { GeoshapeContainer } from "../../geoshape/geoshape-styles"
import bottom_svg from "../../../images/get-involved/bottom_shape.svg"
import bottom_mobile_svg from "../../../images/get-involved/bottom_mobile.svg"
import { GetInvolvedButton } from "../section-styles"

const ApplicationInfo = ({
  subheading,
  applicationEmail,
  ctaLink,
  ctaTitle,
}) => {
  return (
    <>
      <GeoshapeContainer>
        <GeoshapeApplication
          marginTop="-7rem"
          right={true}
          src={bottom_svg}
          alt="blue and white geometric shape"
        />
      </GeoshapeContainer>
      <ApplicationContainer>
        <H2Header>{subheading}</H2Header>
        <P>{applicationEmail}</P>
        <a href={ctaLink}>
          <GetInvolvedButton
            margintop={true}
            primary={true}
            aria-label={ctaTitle}
          >
            {ctaTitle}
          </GetInvolvedButton>
        </a>
      </ApplicationContainer>
      <MobileImageContainer>
        <img src={bottom_mobile_svg} alt="blue and white geometric shape" />
      </MobileImageContainer>
    </>
  )
}

export default ApplicationInfo
