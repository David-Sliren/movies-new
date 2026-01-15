import React from "react";
import Card from "../components/Card";
import { useMovie } from "../hooks/useMoviesQuery";
import { useState } from "react";
import { Link, useParams } from "react-router";
import Btn from "../components/Btn";
import ErrorControl from "../components/ErrorControl";

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

  return (
    <main className="grid grid-rows-[auto_1fr_auto] items-center bg-linear-to-r from-sky-500 min-h-dvh py-2 ">
      <header className=" px-6 flex justify-between items-center">
        <Link to="/">
          <Btn isLeft={true} />
        </Link>
        <span className="bg-black flex justify-center items-center h-12 w-20 text-lg font-inter font-semibold text-white rounded-full transition-discrete duration-500 hover:bg-white hover:text-zinc-900 ">
          {newpage}
        </span>
      </header>

      <section className="grid grid-cols-2 w-full h-full justify-center gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {catalogo.isError && <ErrorControl text={catalogo.error.message} />}

        {catalogo.isLoading && <ErrorControl text="Cargando..." />}
        {catalogo.data?.results?.map((item) => {
          return (
            <Card
              key={item.id}
              imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              imgAlt={item.title}
              textTitle={item.title}
            />
          );
        })}
      </section>

      <footer className="flex justify-evenly items-center w-full py-2">
        <Btn text="Prev" onActive={prevPage} isLeft={true} />
        <Btn text="Next" onActive={nextPage} />
      </footer>
    </main>
  );
}

export default Catalogo;
