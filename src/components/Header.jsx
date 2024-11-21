import Logo from "./logo.jsx";
import WhiteLogo from "../assets/WhiteLogo.png";
import SearchIcon from "../assets/SearchIcon.png";
import BackButton from "../components/BackButton.jsx";
import { Link } from "react-router-dom";

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
}) {
  const validLinkColor = linkColor ? `!${linkColor}` : "!text-black";

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const getFavoritesRoute = () => {
    switch (userType) {
      case "endUser":
        return "/favouritepage";
      case "individualServiceProvider":
        return "/favorites/individual";
      case "businessServiceProvider":
        return "/favorites/business";
      default:
        return "/favorites";
    }
  };

  return (
    <header
      className={`flex justify-between items-center ${
        bgColor || "bg-transparent"
      } ${validLinkColor} text-white py-8 px-16 ${className}`}
    >
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

      <div className="flex items-center space-x-6">
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
            <Link to={getFavoritesRoute()} title="Favorites">
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
          <Link to="/userprofilepersonalinfopage">
            <div className="w-10">
              <img src={profilePic} alt="Profile" className="rounded-full" />
            </div>
          </Link>
        ) : null}
      </div>

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
    </header>
  );
}
