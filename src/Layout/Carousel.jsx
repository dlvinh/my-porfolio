import React from 'react'
import Slider from "react-slick";
import Quote from '../Components/Quote';

export default function Carousel() { 
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        className: "my-slider",
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "10px",
        autoplay: true,
        autoplaySpeed: 1000000,
        cssEase: "ease-in-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <Slider {...settings}>
    <div>
        <Quote></Quote>
    </div>
    <div>
        <Quote></Quote>
    </div>
    <div>
    <Quote></Quote>
    </div>
  </Slider>
  )
}
