type TSlide = {
  index: number;
  children: React.ReactNode;
  lastIndex?: number;
};

const Slide = ({ index, children, lastIndex }: TSlide) => {
  const id = `slide${index}`;
  const left = `#slide${lastIndex ? lastIndex : index - 1}`;
  const right = `#slide${lastIndex === index ? 1 : index + 1}`;
  return (
    <div
      id={id}
      className="carousel-item relative w-full justify-center item-center"
    >
      <div className=" ">{children}</div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 lg:left-80 right-5 lg:right-80 top-1/2">
        <a href={left} className="btn btn-circle">
          {"❮"}
        </a>
        <a href={right} className="btn btn-circle">
          {"❯"}
        </a>
      </div>
    </div>
  );
};

export default Slide;
