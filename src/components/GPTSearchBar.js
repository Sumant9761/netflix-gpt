import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { Ai_Model, API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movies in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie,
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results || [];
  };

  const handleGptSearchClick = async () => {
    // Make an Api call to GPT api and get Movie Results

    const gptQuery = `
  Act as a movie recommendation engine.
  Suggest 5 movies based on the following query:
  "${searchText.current.value}"

  Rules:
  - Only movie names
  - Comma separated
  - No explanations
  Example: The Avengers, Inception, Bullet Train, Interstellar, Mission Impossible
    `;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: Ai_Model,
    });

    if (!gptResults.choices) {
      // TODO: Write error Handling
    }


    const gptMovies = gptResults.choices?.[0]?.message?.content
      .split(",")
      .map((movie) => movie.trim())
      .filter(Boolean);

    //For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = (await Promise.all(promiseArray));


    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-gray-800 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-2 m-4 bg-gradient-to-r from-gray-900 from-0% to-violet-900 to- text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg
            active:scale-95"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
