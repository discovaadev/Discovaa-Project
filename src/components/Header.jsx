import Logo from "./logo.jsx";
import WhiteLogo from "../assets/WhiteLogo.png";
import SearchIcon from "../assets/SearchIcon.png";
import BackButton from "../components/BackButton.jsx";
import { Link, useLocation } from "react-router-dom";
import MobileLogo from "../assets/MobileLogo.png";

export default function Header({
  logoSrc = WhiteLogo,
  showIcons = true,
  searchQuery,
  customLinks = [],
  showSearch = true,
  showProfile = true,
  showAuthButtons = false,
  searchInputProps = {},
  bgColor = "bg-black",
  linkColor = "text-black",
  className = "",
  showSignInText = false,
  showBackButton = false,
  stepText = "",
  profilePic,
  onSearchChange,
  onToggleChat,
  onToggleNotification,
  userType = "endUser",
  toggleFavorites,
  showAvaterNlogo = false,
}) {
  const validLinkColor = linkColor ? `!${linkColor}` : "!text-black";

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const location = useLocation();
  const handleFavoriteClick = (event) => {
    if (
      location.pathname !== "/ispprofilepage" &&
      location.pathname !== "/bspprofilepage" &&
      location.pathname !== "/ispprofilepageedit"
    ) {
      return;
    }
    event.preventDefault();
    toggleFavorites();
  };
  console.log(location.pathname);

  const getFavoritesRoute = () => {
    switch (userType) {
      case "endUser":
        return "/favouritepage";
      case "individualServiceProvider":
        return "/";
      case "businessServiceProvider":
        return "/favorites/business";
      default:
        return "/favorites";
    }
  };

  const getProfileRoute = () => {
    switch (userType) {
      case "endUser":
        return "/userprofilepersonalinfopage";
      case "individualServiceProvider":
        return "/isppersonalprofileinfo";
      case "businessServiceProvider":
        return "/bsppersonalprofileinfo";
      default:
        return "/userprofilepersonalinfopage";
    }
  };

  return (
    <header
      className={`flex justify-between items-center ${
        bgColor || "bg-transparent"
      } ${validLinkColor} w-[460px] text-white py-8 px-16 rounded-b-[90px] sm:rounded-b-none md:bg-transparent h-56 sm:h-auto  sm:w-auto  ${className}`}
    >
      <div className="flex flex-col sm:hidden">
        {showAvaterNlogo && (
          <div className="flex flex-col justify-center items-center  w-full">
            <img src={MobileLogo} />
          </div>
        )}
      </div>

      <div className="hidden sm:flex justify-between w-full ">
        <div className=" ">
          <div className="flex items-center space-x-6 text-sm">
            {showBackButton && <BackButton />}

            <Logo src={logoSrc} width="112px" height="auto" />
            <nav className={`${linkColor} flex space-x-6 items-center ml-6`}>
              {customLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`text-sm ${
                    link.label === "Home" ? "font-bold" : "font-extralight"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {showSearch && (
            <div className="relative flex items-center space-x-3 mr-56">
              <input
                type="text"
                placeholder="Search artisans by name |"
                value={searchQuery}
                onChange={handleInputChange}
                className={`w-full px-3 py-1 pr-48 bg-black border border-gray-300 rounded text-white placeholder-gray-500 focus:outline-none ${
                  searchInputProps.className || ""
                }`}
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 text-gray-500 text-lg focus:outline-none"
                >
                  ✖
                </button>
              ) : (
                <img
                  src={SearchIcon}
                  alt="Search-icon"
                  className="absolute right-3 w-5 h-5 pointer-events-none"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6  ">
          {showIcons && (
            <div className="flex space-x-3 text-lg mr-8">
              <a
                title="Notifications"
                className="cursor-pointer"
                onClick={onToggleNotification}
              >
                <span className="material-icons">notifications</span>
              </a>
              <span
                title="Messages"
                className="cursor-pointer"
                onClick={onToggleChat}
              >
                <span className="material-icons">message</span>
              </span>
              <Link
                to={
                  userType === "individualServiceProvider" ||
                  userType === "businessServiceProvider"
                    ? "#"
                    : getFavoritesRoute()
                }
                title="Favorites"
                onClick={handleFavoriteClick}
              >
                <span className="material-icons">favorite</span>
              </Link>
            </div>
          )}
          {showAuthButtons ? (
            <>
              <Link to="/signin">
                <button className="px-4 py-2 bg-black text-white rounded">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-white text-black border border-black rounded">
                  Sign up
                </button>
              </Link>
            </>
          ) : showProfile ? (
            <Link to={getProfileRoute()}>
              <div className="w-10">
                <img src={profilePic} alt="Profile" className="rounded-full" />
              </div>
            </Link>
          ) : null}

          {showSignInText && (
            <div className="flex items-center justify-center mt-4 text-sm">
              <span className="text-[#8692A6]">Already have an account? </span>
              <Link to="/signin" className="text-blue-500 ml-1">
                Sign in
              </Link>
            </div>
          )}

          {stepText && (
            <span className="text-gray-300 font-semibold">{stepText}</span>
          )}
        </div>
      </div>
    </header>
  );
}
