import { useEffect, useState } from "react";
import Slide from "./slide";

type TCarousel = {
  slides: React.ReactNode[];
};

const Carousel = ({ slides }: TCarousel) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const lastIndex = slides.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = slideIndex === lastIndex ? 0 : slideIndex + 1;
      setSlideIndex(newIndex);
      console.log("This hit 1", newIndex);
      window.location.replace(`#slide${newIndex}`);
    }, 2000);

    return () => {
      clearInterval(interval);
      console.log("This hit 2");
    };
  }, [slideIndex, lastIndex]);

  return (
    <div className="carousel carousel-center w-full flex min-h-[200px]">
      {slides.map((datum, index) => {
        return (
          <Slide
            index={index}
            lastIndex={
              index === 0 || index === lastIndex ? lastIndex : undefined
            }
            key={`slide-${index}`}
          >
            {datum}
          </Slide>
        );
      })}
    </div>
  );
};

export default Carousel;
