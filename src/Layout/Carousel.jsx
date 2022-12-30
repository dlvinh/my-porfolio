import React from 'react'
import Slider from "react-slick";
import Quote from '../Components/Quote';

export default function Carousel({endorsementList}) { 
  console.log("carousel",endorsementList)
    var settings = {
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        className: "my-slider",
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "10px",
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
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
    {endorsementList?.map((item,index)=>{
      return <Quote key={index}   content={item.content} hyperlink={item.hyperlink} author={item.author} jobTitle={item.occupationTitle}></Quote>
    })}
  </Slider>
  )
}
