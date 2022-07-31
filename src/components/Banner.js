import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./Banner.module.css";
import slider1 from "../assets/img/slider-1.jpeg";
import slider2 from "../assets/img/slider-2.jpeg";
import slider3 from "../assets/img/slider-3.jpeg";

const Banner = () => {
  const slides = [
    {
      url: slider1,
      caption_title_top: " We can change",
      caption_title_bottom: "your digital world",
      caption_text:
        "Bold enough to blow a hole in your next marketing campaign",
    },
    {
      url: slider2,
      caption_title_top: "You need",
      caption_title_bottom: "a good partner",
      caption_text: "Let us help you realise your true potential",
    },
    {
      url: slider3,
      caption_title_top: "Shoot for",
      caption_title_bottom: "the hoop!",
      caption_text: "Aiming low is not an option for us",
    },
  ];
  return (
    <div className={classes["banner-container"]}>
      <Slide autoplay={false}>
        {slides.map((slide, index) => (
          <div className={classes["each-slide-effect"]} key={index}>
            <div
              style={{ backgroundImage: `url(${slide.url})` }}
              className={classes["caption-container"]}
            >
              <div className={classes["caption-box"]}>
                <h1>
                  {slide.caption_title_top}
                  <br />
                  {slide.caption_title_bottom}
                </h1>
                <h4>{slide.caption_text}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
