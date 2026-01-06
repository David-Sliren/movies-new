import Avenger from "../../assets/img/Avengers.webp";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import ImgBackGround from "../ImgBackGround";
import ShadowGradient from "../ShadowGradient";
import AlternateText from "../AlternateText";
import GeneralContent from "../GeneralContent";

function Presentation() {
  return (
    <GeneralContent clases="min-h-dvh">
      <ImgBackGround image={Avenger} moveImg="object-[-780px]" />
      <ShadowGradient clases="from-0% to-60%" />

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
      <AlternateText
        clasesP="top-125 md:top-10 scale-90"
        clasesH1="font-bebas_nue text-6xl md:text-8xl tracking-widest lg:w-150 xl:w-fit"
        clasesH2="font-montserrat font-bold text-md md:w-115 lg:w-140 xl:w-166 2xl:w-210"
      />
    </GeneralContent>
  );
}

export default Presentation;
