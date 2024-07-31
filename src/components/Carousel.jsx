import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./main.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, idx) => (
            <div key={idx} className="keen-slider__slide">
              <DataGeneral {...slide} />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`dot${currentSlide === idx ? " active" : ""}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const DataGeneral = ({ title, description, img1 }) => (
  <div className="flex flex-col lg:flex-row h-full">
    <div className="w-full lg:w-1/2 p-4 flex flex-col">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-green-300 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
    <div className="w-full lg:w-1/2 h-full">
      {img1 && (
        <img
          src={img1}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  </div>
);

export default Carousel;
