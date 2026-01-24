import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-10">
      <h1
        className="
          text-white
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          font-semibold
          py-2 md:py-4
        "
      >
        {title}
      </h1>

      <div className="relative">
        <div
          className="
            flex
            gap-2 sm:gap-3 md:gap-4
            overflow-x-auto
            no-scrollbar
            scroll-smooth
            pb-2
          "
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
