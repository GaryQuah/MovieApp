// src/services/api.ts
export interface ApiMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
}

const API_KEY = "fb3b0751f16aaa053c82eb532642c2b3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (): Promise<ApiMovie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<ApiMovie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
