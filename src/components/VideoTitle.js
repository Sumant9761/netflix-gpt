const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-20 bg-gradient-to-r from-black via-black/30 to-transparent">
      <div className="pt-[35%] sm:pt-[28%] md:pt-[18%] px-4 sm:px-8 md:px-16 max-w-full sm:max-w-xl md:max-w-2xl">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p
          className="
          mt-2 md:mt-4
          text-xs sm:text-sm md:text-lg
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
          text-gray-200
        "
        >
          {overview}
        </p>

        <div className="mt-4 md:mt-6 flex items-center gap-2 md:gap-4">
          <button
            className="
            bg-white text-black font-semibold
            px-4 sm:px-6 md:px-10
            py-2 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-md
            hover:bg-opacity-80
            transition
          "
          >
            ⏵Play
          </button>

          <button className="bg-gray-800 text-white font-semibold px-3 sm:px-5 md:px-8 py-2 md:py-3 text-sm sm:text-base md:text-lg rounded-md hover:bg-opacity-80 transition">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
