import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;


  return (
    <div className="
      relative
      w-full
      px-2 sm:px-4 md:px-6
      mt-6 sm:mt-8 md:mt-10
      bg-black bg-opacity-70
      text-white
    ">
      <div className="max-w-[1600px] mx-auto">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
