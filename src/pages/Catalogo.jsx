import React from "react";
import Card from "../components/Card";
import { useMovie } from "../hooks/useTankStack";
import { useState } from "react";
import { useParams } from "react-router";
import Btn from "../components/Btn";

function Catalogo() {
  const [newpage, setNewPage] = useState(1);
  const { title } = useParams();
  const { catalogo } = useMovie(title, newpage);
  function nextPage() {
    setNewPage((prev) => prev + 1);
  }

  function prevPage() {
    if (newpage === 1) {
      return;
    }
    setNewPage((prev) => prev - 1);
  }

  console.log(catalogo.data);

  if (catalogo.isLoading) {
    return <div>Cargando</div>;
  }
  return (
    <main className=" bg-linear-to-r from-sky-500 min-h-dvh py-2 ">
      {/* <header>Hola</header> */}
      <section className="grid grid-cols-2 w-full h-full justify-center gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        {catalogo.data.results?.map((item) => {
          return (
            <Card
              key={item.id}
              imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              textTitle={item.title}
            />
          );
        })}
      </section>
      <section className="flex justify-evenly items-center w-full py-2">
        <Btn text="Prev" onActive={prevPage} isLeft={true} />
        <span className="bg-black flex justify-center items-center size-10 text-lg font-inter font-semibold text-white rounded-full transition-discrete duration-500 hover:bg-white hover:text-zinc-900 ">
          {newpage}
        </span>
        <Btn text="Next" onActive={nextPage} />
      </section>
    </main>
  );
}

export default Catalogo;
