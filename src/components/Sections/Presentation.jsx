import React from "react";
import Avenger from "/src/assets/img/Avengers.webp";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import ImgBackGround from "../ImgBackGround";

function Presentation() {
  return (
    <section className="relative z-0 grid grid-cols-4 gap-6 bg-amber-200 w-full min-h-dvh px-6 xl:grid-cols-12">
      <ImgBackGround image={Avenger} />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-black from-0% to-60% md:to-100% -z-1"></div>

      <motion.div
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileInView={{
          y: [20, 10, 20, 10, 20],
        }}
        className="absolute bottom-8 left-3/6 -translate-x-3/6 w-fit h-fit flex flex-col items-center sm:bottom-10"
      >
        <h3 className="text-2xl text-white font-light text-shadow-lg">
          Scroll
        </h3>
        <ChevronsDown size={24} color="white" className="text-shadow-lg" />
      </motion.div>

      <section className="  col-span-full w-fit h-fit md:pl-6 mt-120 md:col-span-8 md:mt-10 md:-translate-x-6 lg:translate-0 ">
        <h1 className="text-white font-bebas font-bold text-4xl -tracking-tighter text-shadow-lg xl:text-5xl 2xl:text-6xl">
          CONTENIDO DE CALIDAD
        </h1>
        <h2 className="font-montserrat text-white mt-5 -tracking-tight font-bold  text-shadow-md text-md md:w-115 lg:w-140 xl:w-166 2xl:w-210">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          ex ullam iste animi facilis sit minus temporibus repellat, cum nobis
          veniam! Esse labore, provident rerum quisquam quo nulla possimus
          ipsum?
        </h2>
      </section>
    </section>
  );
}

export default Presentation;
