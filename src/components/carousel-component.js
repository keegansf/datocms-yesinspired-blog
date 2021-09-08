import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/carousel.scss"



function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
      role="figure"
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
      role="figure"
    />
  )
}

export default function CarouselComponent(props) {
  var settings = {
    fade: props.fade,
    slidesToShow: props.slides,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 8000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: false,
    swipeToSlide: false,
    pauseOnHover: true
  }
  return (
    <div role="figure" onClick="false" className="slider">
        <div className="slide-overlay">&nbsp;</div>
        <Slider {...settings}>
         {props.children}
        </Slider>
    </div>
  )
}