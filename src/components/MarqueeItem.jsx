import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 600, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {shuffleArray(images).map((image, index) => {
          return <img className="h-20 sm:h-40 w-auto pr-5" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 600, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-20 sm:h-40 w-auto pr-5" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;