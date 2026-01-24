import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 py-2 md:py-4">

        {/* LOGO */}
        <img className="w-24 sm:w-28 md:w-36 lg:w-44" src={logo} alt="Logo" />

        {user && (
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">

            {/* LANGUAGE SELECT (only when GPT Search is ON) */}
            {showGptSearch && (
              <select
                className=" p-1 md:p-2 bg-gray-900 text-white text-xs md:text-sm rounded"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT SEARCH BUTTON */}
            <button
              className="bg-gradient-to-r from-gray-900 to-violet-900 text-white
              px-2 sm:px-3 md:px-4 py-1.5 md:py-2
              text-[10px] sm:text-xs md:text-sm
              rounded-md font-semibold transition
              hover:scale-105 active:scale-95"
              onClick={handleGPTSearch}
            >
              {showGptSearch ? "🏠" : "GPT Search"}
            </button>

            {/* USER AVATAR */}
            <img
              className="hidden sm:block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover"
              alt="usericon"
              src={user?.photoURL}
            />

            {/* SIGN OUT (hide on mobile) */}
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-gray-900 to-violet-900
              text-white px-4 py-2 rounded-md text-sm font-semibold transition
              hover:scale-105"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
