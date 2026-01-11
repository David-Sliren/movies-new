import React from "react";
import { motion } from "motion/react";

function Card({ imgUrl, imgAlt, textTitle = "movie the lay" }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        translateX: [2, 4, 2, 4, 2],
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.9 }}
      className=" flex flex-col gap-1 aspect-[2/3]  items-center rounded-md overflow-hidden cursor-pointer"
    >
      <div className="w-full max-h-[75%] overflow-hidden">
        <img
          src={imgUrl}
          alt={imgAlt}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="bg-zinc-600/60 flex justify-center items-center w-full h-[25%] max-h-full px-2">
        <p
          className={` text-center font-inter text-white font-bold ${
            textTitle.length > 16 ? "text-sm" : "text-lg"
          }`}
        >
          {textTitle}
        </p>
      </div>
    </motion.article>
  );
}

export default Card;
