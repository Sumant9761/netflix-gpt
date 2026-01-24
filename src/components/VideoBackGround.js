import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        className="
          absolute top-1/2 left-1/2
          w-[140vw] h-[140vh]
          sm:w-[120vw] sm:h-[120vh]
          md:w-[110vw] md:h-[110vh]
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

       {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default VideoBackGround;
