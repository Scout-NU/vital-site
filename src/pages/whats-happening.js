import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CarouselShared from "../components/carousel-shared/carousel"
import Calendar from "../components/whats-happening/calendar"
import Slack from "../components/whats-happening/slack"
import Header from "../components/header/header"
import MailingList from "../components/whats-happening/mailing-list"
import SocialMedia from "../components/whats-happening/social-media/social-media"

const WhatsHappening = props => {
  const whatsHappening = get(props, "data.contentfulWhatsHappeningPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="What's Happening" />
      <Header
        title={whatsHappening.title}
        mobileTitle={whatsHappening.title}
        subheading={whatsHappening.subheadingForTitle}
        imageBool={true}
      />
      <CarouselShared
        title={whatsHappening.carouselTitle}
        carouselItems={whatsHappening.carouselItems}
        minItems={3}
        placeholderText={whatsHappening.defaultCarouselPlaceholder}
        placeholderTitle={whatsHappening.defaultCarouselItemTitle}
        placeholderDescription={whatsHappening.defaultCarouselItemDescription}
        openInNewTab={true}
      />
      <Calendar
        title={whatsHappening.calendarTitle}
        calendarEmbedCode={whatsHappening.calendarEmbedCode}
      />
      <SocialMedia
        title={whatsHappening.socialMediaTitle}
        instaLink={whatsHappening.instagramPostToDisplay}
        facebookPage={whatsHappening.facebookUrl}
      />
      <Slack
        title={whatsHappening.joinSlackTitle}
        link={whatsHappening.joinSlackLink}
        logo={whatsHappening.slackLogo}
        blurb={whatsHappening.joinSlackBlurb.joinSlackBlurb}
      />
      <MailingList title={whatsHappening.newsletterCtaTitle} />
    </Layout>
  )
}

export default WhatsHappening

export const pageQuery = graphql`
  query whatsHappeningQuery {
    contentfulWhatsHappeningPage {
      title
      subheadingForTitle
      carouselTitle
      carouselItems {
        title
        subTitle
        link
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      defaultCarouselItemTitle
      defaultCarouselItemDescription
      defaultCarouselPlaceholder
      calendarTitle
      calendarEmbedCode
      socialMediaTitle
      instagramHandle
      facebookUrl
      joinSlackTitle
      joinSlackLink
      joinSlackBlurb {
        joinSlackBlurb
      }
      slackLogo {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
        description
      }
      newsletterCtaTitle
      newsletterCtaLink
      socialMediaTitle
      instagramPostToDisplay
      facebookUrl
    }
  }
`
