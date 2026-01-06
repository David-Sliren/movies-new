import React from "react";
import GeneralContent from "../GeneralContent";
import Zootopia from "../../assets/img/zootopia.webp";
import CardCatalogo from "../CardCatalogo";

function Catalogo() {
  return (
    <GeneralContent clases="min-h-dvh bg-linear-to-b from-[#2680B4] to-[#555993] overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-150 h-220">
        <img
          src={Zootopia}
          alt="imagen de zootopia 2"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <section className="grid grid-rows-4 gap-2 w-100">
        <CardCatalogo text="Recientes" />
        <CardCatalogo text="Populares" />
        <CardCatalogo text="Mas vistas" />
      </section>
    </GeneralContent>
  );
}

export default Catalogo;
