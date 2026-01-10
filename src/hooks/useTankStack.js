import { useQuery } from "@tanstack/react-query";

import { callApi } from "./useFetch";

export function useMovieRecent(page = 1) {
  const recent = useQuery({
    queryKey: ["recent", { page }],
    queryFn: () =>
      callApi(
        `https://api.themoviedb.org/3/trending/movie/day?language=es-MX&page=${page}`
      ),
    staleTime: 1 * 60 * 1000,
  });

  return {
    recent,
  };
}

export function useMoviePopular(page = 1) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=es-MX&page=${page}'`;

  const popular = useQuery({
    queryKey: ["moreView", { page }],
    queryFn: () => callApi(url),
  });

  return {
    popular,
  };
}
