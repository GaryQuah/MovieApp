import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const MovieContext = createContext();

// Custom hook to consume the context
export const useMovieContext = () => useContext(MovieContext);

// Context provider component
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
