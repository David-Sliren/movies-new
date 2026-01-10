import React from "react";

function Card({ imgUrl, imgAlt, textTitle = "movie the lay" }) {
  return (
    <article className=" flex flex-col gap-1 aspect-[2/3]  items-center rounded-md overflow-hidden ">
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
    </article>
  );
}

export default Card;
