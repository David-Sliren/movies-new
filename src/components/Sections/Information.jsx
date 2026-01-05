import React from "react";
import ImgBackGround from "../ImgBackGround";
import Merlina from "/src/assets/img/merlina.webp";

function Information() {
  return (
    <section className="relative z-0 w-full min-h-[50dvh] bg-green-300">
      <ImgBackGround image={Merlina} />
    </section>
  );
}

export default Information;
