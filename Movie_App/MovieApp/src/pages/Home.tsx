//Display movies
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("Search for movies");
  const movies = [
    {
      id: 1,
      title: "2020 Movie Title",
      release_date: "2020",
      url: "https://via.placeholder.com/150",
      onFavouriteClick: () => alert("Favorited 2020 Movie Title!"),
    },
    {
      id: 2,
      title: "2021 Movie Title",
      release_date: "2021",
      url: "https://via.placeholder.com/150",
      onFavouriteClick: () => alert("Favorited 2021 Movie Title!"),
    },
    {
      id: 3,
      title: "2022 Movie Title",
      release_date: "2022",
      url: "https://via.placeholder.com/150",
      onFavouriteClick: () => alert("Favorited 2022 Movie Title!"),
    },
    {
      id: 4,
      title: "2023 Movie Title",
      release_date: "2023",
      url: "https://via.placeholder.com/150",
      onFavouriteClick: () => alert("Favorited 2023 Movie Title!"),
    },
    {
      id: 5,
      title: "2024 Movie Title",
      release_date: "2024",
      url: "https://via.placeholder.com/150",
      onFavouriteClick: () => alert("Favorited 2024 Movie Title!"),
    },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="serach-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          // Update input field so we can type in the field
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) =>
          movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ? (
            <MovieCard movie={movie} key={movie.id} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Home;
