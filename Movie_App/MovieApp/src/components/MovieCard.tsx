import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

export type Movie = {
  id: string;
  title: string;
  release_date: string;
  url: string;
};

function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavouriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <img src={movie.url} alt={movie.title} />
      <div className="movie-overlay">
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavouriteClick}
        >
          ❤
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.release_date?.split("-")[0]}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
