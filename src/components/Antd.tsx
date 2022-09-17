import "antd/dist/antd.css";
import { Carousel } from "antd";

const Antd = () => {
  return (
    <Carousel style={{ width: 500 }}>
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          hello
        </div>
      </div>
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          yshush
        </div>
      </div>
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          haha
        </div>
      </div>
    </Carousel>
  );
};

export default Antd;
