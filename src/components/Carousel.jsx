import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Carousel = ({ slides }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((slide, idx) => (
        <div key={idx} className="keen-slider__slide">
          <DataGeneral {...slide} />
        </div>
      ))}
    </div>
  );
};

const DataGeneral = ({ title, description, img1, img2 }) => (
  <div className="p-4 mt-8">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-300">
      {title}
    </h2>
    <p>{description}</p>
    <div className="flex space-x-4 mt-4">
      {img1 && <img src={img1} alt={title} className="w-1/2 h-auto rounded" />}
      {img2 && <img src={img2} alt={title} className="w-1/2 h-auto rounded" />}
    </div>
  </div>
);

export default Carousel;
