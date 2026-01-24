import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        w-28 sm:w-32 md:w-40
        flex-shrink-0
        transform transition duration-300
        hover:scale-110 hover:z-20
      "
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg object-cover w-full h-full hover:brightness-90"
      />
    </div>
  );
};

export default MovieCard;
