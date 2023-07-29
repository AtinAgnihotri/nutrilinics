type TSlide = {
  index: number;
  children: React.ReactNode;
  onLeftClick: () => void;
  onRightClick: () => void;
};

const Slide = ({ index, children, onLeftClick, onRightClick }: TSlide) => {
  const id = `slide${index}`;
  return (
    <div
      id={id}
      className="carousel-item relative w-full justify-center item-center"
    >
      <div className=" ">{children}</div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 lg:left-80 right-5 lg:right-80 top-1/2">
        <button className="btn btn-circle" onClick={onLeftClick}>
          {"❮"}
        </button>
        <button className="btn btn-circle" onClick={onRightClick}>
          {"❯"}
        </button>
      </div>
    </div>
  );
};

export default Slide;
