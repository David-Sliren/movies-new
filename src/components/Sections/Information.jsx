import React from "react";
import ImgBackGround from "../ImgBackGround";
import Merlina from "/src/assets/img/merlina.webp";
import ShadowGradient from "../ShadowGradient";
import AlternateText from "../AlternateText";

function Information() {
  return (
    <section className="relative z-0 grid grid-cols-4 gap-6 bg-amber-200 w-full min-h-dvh md:min-h-[70dvh] px-6 xl:grid-cols-12">
      <ImgBackGround image={Merlina} moveImg="object-[-880px]" />
      <ShadowGradient clases="from-0% to-70%" />
      <AlternateText
        clasesP="top-135 md:top-50 md:scale-85 lg:scale-100"
        clasesH1="font-montserrat text-4xl font-bold tracking-widest"
        clasesH2="font-inter md:w-115 lg:w-140 xl:w-140"
      />
    </section>
  );
}

export default Information;
