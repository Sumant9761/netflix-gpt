export const logo =
  "https://raw.githubusercontent.com/Sumant9761/FilmoraX/a2d9dcd1bb8077164bf9461be3fa7ba42a8d9424/src/utils/assets/logo.svg";

export const USER_AVATAR =
  "https://raw.githubusercontent.com/Sumant9761/FilmoraX/refs/heads/main/src/utils/assets/icon.jpeg";

export const BACKGROUND_LOGO =
  "https://raw.githubusercontent.com/Sumant9761/FilmoraX/refs/heads/main/src/utils/assets/background.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BACKGROUND_2 =
  "https://raw.githubusercontent.com/Sumant9761/FilmoraX/refs/heads/main/src/utils/assets/background2.png";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "german", name: "German" },
  { identifier: "french", name: "French" },
  { identifier: "japanese", name: "Japanese" },
  { identifier: "italian", name: "Italian" },
  { identifier: "chinese", name: "Chinese" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const Ai_Model = "llama-3.1-8b-instant";
