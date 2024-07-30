import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

const MovingImageRow = ({ images, speed, direction }) => {
  const [position, setPosition] = useState(direction === "left" ? 0 : -100);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const animate = useCallback(() => {
    setPosition((prevPosition) => {
      const newPosition =
        prevPosition + speed * (direction === "left" ? -1 : 1);
      return direction === "left"
        ? newPosition <= -100
          ? 0
          : newPosition
        : newPosition >= 0
        ? -100
        : newPosition;
    });
  }, [speed, direction]);

  useEffect(() => {
    const intervalId = setInterval(animate, isMobile ? 32 : 16); // 30fps on mobile, 60fps on desktop
    return () => clearInterval(intervalId);
  }, [animate, isMobile]);

  return (
    <div className="flex overflow-hidden whitespace-nowrap h-full">
      <div
        className="flex h-full transition-transform blur-base"
        style={{ transform: `translateX(${position}%)` }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-auto h-full object-cover aspect-square"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const TestCarousel = ({ images }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const rowCount = isMobile ? 2 : 3;
  const imagesPerRow = Math.max(1, Math.ceil(images.length / rowCount));

  const rows = Array.from({ length: rowCount }, (_, i) => {
    const rowImages = images.slice(i * imagesPerRow, (i + 1) * imagesPerRow);
    while (rowImages.length < imagesPerRow) {
      rowImages.push(...rowImages.slice(0, imagesPerRow - rowImages.length));
    }
    return rowImages;
  });

  return (
    <div
      className={`grid ${
        isMobile ? "grid-rows-2" : "grid-rows-3"
      } h-screen w-full`}
    >
      {rows.map((rowImages, index) => (
        <div key={index} className="h-full overflow-hidden">
          <MovingImageRow
            images={rowImages}
            speed={isMobile ? 0.1 + index * 0.02 : 0.2 + index * 0.05}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        </div>
      ))}
    </div>
  );
};

export default TestCarousel;
