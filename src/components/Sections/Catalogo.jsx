import React from "react";
import GeneralContent from "../GeneralContent";
import Zootopia from "/src/assets/img/zootopia.webp";
import CardCatalogo from "../CardCatalogo";

function Catalogo() {
  return (
    <GeneralContent clases="min-h-dvh bg-linear-to-b from-[#2680B4] to-[#555993] overflow-hidden items-center">
      <div className="absolute top-0 right-0 w-150 h-220 hidden md:block md:-right-45 md:-top-6 md:scale-95 lg:-right-20 xl:right-0 xl:top-0 xl:scale-100">
        <img
          src={Zootopia}
          alt="imagen de zootopia 2"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <h1 className="row-end-1 col-span-4 text-white text-7xl sm:text-8xl flex justify-center md:justify-start font-bebas_nue tracking-widest md:scale-100">
        Catalogo
      </h1>

      <section className="row-end-2 col-span-4 grid grid-rows-4 gap-2 -mt-20 md:col-span-2 xl:col-span-6">
        <CardCatalogo text="Recientes" />
        <CardCatalogo text="Populares" />
        <CardCatalogo text="Mas vistas" />
      </section>
    </GeneralContent>
  );
}

export default Catalogo;
