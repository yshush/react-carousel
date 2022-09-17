import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Responsive = () => {
  return (
    <>
      <Carousel infiniteLoop>
        <div
          style={{
            height: 500,
            background: "red",
          }}
        >
          1
        </div>
        <div
          style={{
            height: 500,
            background: "blue",
          }}
        >
          2
        </div>
        <div
          style={{
            height: 500,
            background: "green",
          }}
        >
          3
        </div>
      </Carousel>
    </>
  );
};

export default Responsive;
