import Logo from "./logo.jsx";
import WhiteLogo from "../assets/WhiteLogo.png";
import SearchIcon from "../assets/SearchIcon.png";
import BackButton from "../components/BackButton.jsx";
import { Link, useLocation } from "react-router-dom";
import MobileLogo from "../assets/MobileLogo.png";
import { useState } from "react";

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
  showSignUpText = false,
  showBackButton = false,
  stepText = "",
  profilePic,
  onSearchChange,
  onToggleChat,
  onToggleNotification,
  userType = "endUser",
  toggleFavorites,
  showAvaterNlogo = false,
  hideNavLinks,
  showBackButtonAndStepText = false,
  pageTitle = "",
  showPageTitle = false,
  showMobileLogo = false,
  showSignInButton = false,
  showSignUpButton = false,
  showMenuIcon = false,
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
  console.log("hideNavLinks:", hideNavLinks);

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
  const isUserSignupPage = location.pathname === "/usersignuppage";
  const isUserSignupPage2 = location.pathname === "/usersignuppage2";
  const isUserConfirmationPage = location.pathname === "/useremailconfirmation";
  const isLoginPage = location.pathname === "/login";
  const isIsvSignUpPage = location.pathname === "/isvsignup";
  const isIsvEmailPage = location.pathname === "/isvemail";
  const isBsvSignUpPage = location.pathname === "/businesssignup";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`flex ${
        bgColor ? bgColor : "bg-black h-46 sm:bg-transparent"
      } ${validLinkColor} w-full text-white py-8 p-0 rounded-b-[30px]  
    sm:rounded-b-none h-auto sm:w-auto md:px-5 justify-between 
    lg:h-auto ${className}`}
    >
      {/* FOR MOBILE */}
      <div className="flex flex-col sm:hidden w-full">
        {" "}
        <div className="flex justify-between items-center px-4 relative">
          {showMobileLogo && (
            <div className="flex items-center">
              <img
                src={logoSrc}
                alt="Logo"
                className="w-24 h-auto invert brightness-200 "
              />
            </div>
          )}
        {showMenuIcon && (
          <div className="absolute right-6">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <span className="material-icons text-3xl">close</span>
              ) : (
                <span className="material-icons text-3xl">menu</span>
              )}
            </button>
          </div>
        )}
        </div>
        {menuOpen && (
          <nav
            className="flex flex-col items-center text-white rounded-b-lg mt-2 p-4 space-y-4"
            onClick={() => setMenuOpen(false)}
          >
            {customLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-lg hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {showSignInButton && (
              <Link to="/signin">
                <button className="w-full px-4 py-1 bg-white text-black rounded">
                  Sign In
                </button>
              </Link>
            )}
            {showSignUpButton && (
              <Link to="/signup">
                <button className="w-full px-4 py-1 bg-white text-black border border-black rounded">
                  Sign Up
                </button>
              </Link>
            )}
          </nav>
        )}
        {showBackButtonAndStepText && (
          <div className="flex flex-row items-center justify-between w-full">
            <BackButton />
            <div className="text-gray-300 font-semibold ml-40 pr-3 text-sm">
              {stepText}
            </div>
          </div>
        )}
        <div> {showBackButton && <BackButton />}</div>
        {showAvaterNlogo && (
          <div className="flex flex-col justify-center items-center m-auto w-6/12">
            <img src={MobileLogo} alt="Logo" />
          </div>
        )}
        {showPageTitle && (
          <div className="block text-2xl text-white text-start pl-20 py-5 sm:hidden">
            {isUserSignupPage &&  (
              <div className="text-sm text-gray-600 font-semibold">
                Personal Info
              </div>
            )}
            {isIsvSignUpPage &&  (
              <div className="text-sm text-gray-600 font-semibold -translate-x-4">
                Personal Info
              </div>
            )}
            {isBsvSignUpPage &&  (
              <div className="text-sm text-gray-600 font-semibold -translate-x-8">
                Personal Info
              </div>
            )}
            
            <div
              className={`text-2xl font-semibold ${
                isUserSignupPage
                  ? " text-white "
                  : isUserConfirmationPage
                  ? "ml-6 translate-y-4"
                  : isUserSignupPage2
                  ? " translate-y-4"
                  : isLoginPage
                  ? "text-white ml-14 "
                  : isIsvSignUpPage
                  ? "text-white text-xl -translate-x-4"
                  : isIsvEmailPage
                  ? "ml-2"
                  : isBsvSignUpPage
                  ? "text-white -translate-x-8"
                  : "text-white"
              }`}
            >
              {pageTitle}
            </div>
            {isLoginPage && (
              <div className="text-[11px] text-gray-600 font-semibold ml-[65px] -mt-3">
                Login to continue
              </div>
            )}
          </div>
        )}
      </div>
      {/* FOR DESKTOP */}
      <div className="hidden sm:flex items-center justify-between w-full ">
        <div className=" flex space-x-16">
          <div className="flex items-center space-x-6 text-sm">
            <div> {showBackButton && <BackButton />}</div>

            <Logo src={logoSrc} width="112px" height="auto" />
            {hideNavLinks ? (
              <nav className="hidden lg:flex space-x-6 items-center ml-6">
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
            ) : (
              <nav className={`${linkColor}  flex space-x-6 items-center ml-6`}>
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
            )}
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

          {showSignUpText && (
            <>
              <div className="hidden sm:flex items-center justify-center mt-4 text-sm">
                <span className="text-[#8692A6]">Don’t have an account? </span>
                <Link to="/signup" className="text-blue-500 ml-1">
                  Sign up
                </Link>
              </div>

              <div className="flex sm:hidden items-center justify-center mt-4 text-sm">
                <span className="text-[#8692A6]">Don’t have an account? </span>
                <Link to="/signup" className="text-blue-500 ml-1">
                  Sign up
                </Link>
              </div>
            </>
          )}

          {showSignInText && (
            <>
              <div className="hidden sm:flex items-center justify-center mt-4 text-sm">
                <span className="text-[#8692A6]">
                  Already have an account?{" "}
                </span>
                <Link to="/signin" className="text-blue-500 ml-1">
                  Sign in
                </Link>
              </div>

              <div className="flex sm:hidden items-center justify-center mt-4 text-sm">
                <span className="text-[#8692A6]">
                  Already have an account?{" "}
                </span>
                <Link to="/signin" className="text-blue-500 ml-1">
                  Sign in
                </Link>
              </div>
            </>
          )}

          {stepText && (
            <span className="text-gray-300 font-semibold">{stepText}</span>
          )}
        </div>
      </div>
    </header>
  );
}
