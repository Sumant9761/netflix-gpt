import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_LOGO } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_LOGO}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
