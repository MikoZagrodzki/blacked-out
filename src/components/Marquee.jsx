import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",    "/medias/OrangScroll1.png",
    "/medias/OrangScroll2.png",
  ];

  const lowerMarquee = [
    "/medias/OrangeScroll2.png"

  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      {/* <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} /> */}
    </div>
  );
};

export default Marquee;