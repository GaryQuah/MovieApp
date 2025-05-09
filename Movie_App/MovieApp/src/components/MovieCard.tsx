// src/components/MovieCard.tsx
import "../css/MovieCard.css";

type Movie = {
  title: string;
  release_date: string;
  url: string;
  onFavouriteClick: () => void;
};

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <img src={movie.url} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={movie.onFavouriteClick}>
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
