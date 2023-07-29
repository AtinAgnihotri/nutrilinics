import { useCallback, useEffect, useRef, useState } from "react";
import Slide from "./slide";
import { DEFAULT_CAROUSEL_SCROLL_TIME } from "../../utils/constants";

type TCarousel = {
  slides: React.ReactNode[];
  scrollTime?: number;
};

const Carousel = ({ slides, scrollTime }: TCarousel) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const lastIndex = slides.length - 1;

  const scrollToIndex = useCallback((index: number) => {
    if (!ref.current) return;
    ref.current.scrollLeft = index * ref.current.clientWidth;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = slideIndex === lastIndex ? 0 : slideIndex + 1;
      setSlideIndex(newIndex);
      scrollToIndex(newIndex);
    }, scrollTime || DEFAULT_CAROUSEL_SCROLL_TIME);

    return () => {
      clearInterval(interval);
      console.log("This hit 2");
    };
  }, [slideIndex, lastIndex]);

  return (
    <div
      ref={ref}
      className="carousel carousel-center w-full flex min-h-[200px]"
    >
      {slides.map((datum, index) => {
        return (
          <Slide
            index={index}
            lastIndex={
              index === 0 || index === lastIndex ? lastIndex : undefined
            }
            key={`slide-${index}`}
            onLeftClick={() => {
              const newIndex = index === 0 ? lastIndex : index - 1;
              scrollToIndex(newIndex);
              setSlideIndex(newIndex);
            }}
            onRightClick={() => {
              const newIndex = index === lastIndex ? 0 : index + 1;
              scrollToIndex(newIndex);
              setSlideIndex(newIndex);
            }}
          >
            {datum}
          </Slide>
        );
      })}
    </div>
  );
};

export default Carousel;
