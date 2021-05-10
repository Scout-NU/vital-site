import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { H2, P, PCard } from "../../constants/typography"
import {
  CarouselTitleContainer,
  CarouselButtonsContainer,
  CarouselNav,
  NavButtons,
  CarouselControls,
  Control,
  CarouselTextContainer,
  EventTitle,
  MoreLink,
  LongRightArrow,
  CarouselImage,
  PlaceholderBox,
  PlaceholderText,
} from "./carousel-styles"
import "./carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import union from "../../images/union-right.svg"
import longRightArrow from "../../images/long-right-arrow.svg"
import carouselPlaceholder from "../../images/carousel-placeholder.png"

const CarouselShared = ({
  title,
  carouselItems,
  minItems,
  placeholderText,
  placeholderTitle,
  placeholderDescription,
  openInNewTab,
}) => {
  while (carouselItems.length < minItems) {
    carouselItems.push({
      featuredImage: { fluid: { src: carouselPlaceholder } },
      title: placeholderTitle,
      subTitle: placeholderDescription,
      placeholder: true,
    })
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <>
      <CarouselTitleContainer>
        <H2>{title}</H2>
      </CarouselTitleContainer>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={item.title + index}>
              <CarouselImage
                role="img"
                aria-label={item.featuredImage.description}
                alt={item.featuredImage.description}
                src={item.featuredImage.fluid.src}
              >
                {item.placeholder && (
                  <PlaceholderBox>
                    <PlaceholderText>{placeholderText}</PlaceholderText>
                  </PlaceholderBox>
                )}
              </CarouselImage>

              <CarouselTextContainer>
                <div>
                  <EventTitle>{item.title}</EventTitle>
                  <PCard>{item.subTitle}</PCard>
                </div>

                {item.link && (
                  <MoreLink href={item.link} target={openInNewTab && "_blank"}>
                    <P> Learn More</P>
                    <div>
                      <LongRightArrow src={longRightArrow}></LongRightArrow>
                    </div>
                  </MoreLink>
                )}
              </CarouselTextContainer>
            </div>
          )
        })}
      </Carousel>
      ;
    </>
  )
}

export default CarouselShared
