// src/pages/Home.tsx
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import type { ApiMovie } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<ApiMovie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies...");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies(); // ✅ Important: must call the async function
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const serachResults = await searchMovies(searchQuery);
      setMovies(serachResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: String(movie.id),
              title: movie.title,
              release_date: movie.release_date,
              url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
