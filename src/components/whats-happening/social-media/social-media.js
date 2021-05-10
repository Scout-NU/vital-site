import React from "react"
import InstagramEmbed from "react-instagram-embed"
import { FacebookProvider, Page } from "react-facebook"
import {
  SocialMediaSectionContainer,
  SocialMediaContainer,
  Social,
  SocialTitle,
} from "./social-media-styles"

const SocialMedia = ({ instaLink, facebookPage, title }) => {
  return (
    <SocialMediaSectionContainer>
      <SocialTitle>{title}</SocialTitle>
      <SocialMediaContainer>
        <Social>
          <InstagramEmbed
            url={instaLink}
            clientAccessToken={process.env.FACEBOOK_CLIENT_ACCESS_TOKEN}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </Social>
        <Social>
          <FacebookProvider appId={process.env.FACEBOOK_APP_ID}>
            <Page href={facebookPage} tabs="timeline" />
          </FacebookProvider>
        </Social>
      </SocialMediaContainer>
    </SocialMediaSectionContainer>
  )
}

export default SocialMedia