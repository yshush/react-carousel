import React from "react";
import Antd from "./components/Antd";
import Carousel from "./components/Carousel";
import Responsive from "./components/Responsive";
import Slick from "./components/Slick";

function App() {
  return (
    <div>
      <Carousel loop autoLoop autoTime={1000} transitionTime={1000}>
        <div>hello</div>
        <div>world</div>
        <div>yshush</div>
        <div>baam</div>
      </Carousel>
      {/* <div>Antd</div>
      <Antd />
      <div>Responsive</div>
      <Responsive />
      <div>Slick</div>
      <Slick /> */}
    </div>
  );
}

export default App;
