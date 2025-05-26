import { type Movie } from "../components/MovieCard";
import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

type MovieContextType = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieID: string) => void;
  isFavorite: (movieID: string) => boolean;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => useContext(MovieContext)!;

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieID: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavorite = (movieID: string) => {
    return favorites.some((movie) => movie.id === movieID);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
