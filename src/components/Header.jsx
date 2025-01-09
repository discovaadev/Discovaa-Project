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
  showDesktopIcons = false,
  showSearchButton = false,
  // tabletMenuEnabled = false,
  enableTabletHeader = false,
  tabletView = false,
}) {
  const validLinkColor = linkColor ? `!${linkColor}` : "!text-black";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
  const isForgotPasswordPage = location.pathname === "/forgotpassword";
  const isOtpVerificationPage = location.pathname === "/otpverification";
  const isResetPasswordPage = location.pathname === "/resetpassword";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

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
        <div className="flex relative items-center">
          {showMobileLogo && (
            <img src={WhiteLogo} alt="Logo" className="w-24 h-auto ml-3" />
          )}

          <div className="flex items-center justify-center space-x-2">
            {showSearchButton && (
              <div className="relative flex flex-col items-center space-x-2 translate-x-8 -translate-y-1">
                <button
                  onClick={() => setSearchActive(!isSearchActive)}
                  className="text-white text-xl focus:outline-none"
                  aria-label="Toggle search"
                >
                  <span className="material-icons">search</span>
                </button>
                <span className="absolute top-4 text-xs text-white">
                  Search
                </span>
              </div>
            )}

            {showDesktopIcons && (
              <div className="translate-x-8">
                <div className="flex space-x-1 translate-x-12">
                  <a
                    title="Notifications"
                    className="cursor-pointer"
                    onClick={onToggleNotification}
                  >
                    <span className="material-icons text-xl">
                      notifications
                    </span>
                  </a>
                  <span
                    title="Messages"
                    className="cursor-pointer"
                    onClick={onToggleChat}
                  >
                    <span className="material-icons text-xl">message</span>
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
                    <span className="material-icons text-xl">favorite</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

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

        {isSearchActive && (
          <div className="flex flex-col w-full mt-3">
            <div className="relative w-full flex justify-center">
              <input
                type="text"
                placeholder="Search by name |"
                value={searchQuery}
                onChange={handleInputChange}
                className="w-11/12 px-3 py-1 pr-48 bg-black border border-gray-300 rounded text-white placeholder-gray-500 focus:outline-none"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-8 top-1 text-gray-500 text-lg focus:outline-none"
                >
                  ✖
                </button>
              ) : (
                <img
                  src={SearchIcon}
                  alt="Search-icon"
                  className="absolute right-8 top-1 w-5 h-5 pointer-events-none"
                />
              )}
            </div>
          </div>
        )}

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
        {showBackButton && (
          <div className="hidden md:block">
            <BackButton />
          </div>
        )}
        {showAvaterNlogo && (
          <div className="flex flex-col justify-center items-center m-auto w-6/12">
            <img src={MobileLogo} alt="Logo" />
          </div>
        )}

        {isForgotPasswordPage && (
          <div className="">
            <BackButton />
          </div>
        )}
        {isOtpVerificationPage && (
          <div className="">
            <BackButton />
          </div>
        )}
        {isResetPasswordPage && (
          <div className="">
            <BackButton />
          </div>
        )}
        {showPageTitle && (
          <div className="block text-2xl text-white text-start pl-20 py-5 sm:hidden">
            {isUserSignupPage && (
              <div className="text-sm text-gray-600 font-semibold">
                Personal Info
              </div>
            )}
            {isIsvSignUpPage && (
              <div className="text-sm text-gray-600 font-semibold -translate-x-4">
                Personal Info
              </div>
            )}
            {isBsvSignUpPage && (
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
      {/* FOR TABLET */}
      {enableTabletHeader && (
        <div className="hidden md:flex items-center justify-between w-full lg:hidden">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={toggleSidebar}
              className="text-white text-xl p-2 focus:outline-none"
            >
              <span className="material-icons">
                {isSidebarOpen ? "close" : "menu"}
              </span>
            </button>

            <div
              className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`}
            >
              <div className="flex items-center justify-between p-4">
                <Logo src={logoSrc} width="112px" height="auto" />

                <button
                  onClick={toggleSidebar}
                  className="text-white text-xl focus:outline-none"
                >
                  <span className="material-icons">close</span>
                </button>
              </div>

              <nav className="flex flex-col space-y-4 mt-6 px-4">
                {customLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={toggleSidebar}
                    className="text-white text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {showSearch && (
              <div className="relative flex-grow flex justify-center px-4">
                <input
                  type="text"
                  placeholder="Search artisans by name |"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="w-8/12 px-3 py-1 pr-48 bg-black border border-gray-300 rounded text-white placeholder-gray-500 focus:outline-none"
                />
                {searchQuery ? (
                  <button
                    onClick={() => onSearchChange("")}
                    className="absolute right-24 top-1 text-gray-500 text-lg focus:outline-none"
                  >
                    ✖
                  </button>
                ) : (
                  <img
                    src={SearchIcon}
                    alt="Search-icon"
                    className="absolute right-24 top-1 w-5 h-5 pointer-events-none"
                  />
                )}
              </div>
            )}

            {showIcons && (
              <div className="flex space-x-3 -translate-x-10 px-4 text-lg">
                {[
                  { name: "notifications", action: onToggleNotification },
                  { name: "message", action: onToggleChat },
                ].map((icon, index) => (
                  <button
                    key={index}
                    title={icon.name}
                    onClick={icon.action}
                    className="cursor-pointer"
                  >
                    <span className="material-icons">{icon.name}</span>
                  </button>
                ))}
                <button
                  title="favorite"
                  onClick={handleFavoriteClick}
                  className="cursor-pointer"
                >
                  <span className="material-icons">favorite</span>
                </button>
              </div>
            )}

            <Link to={getProfileRoute()}>
              <div className="w-10">
                <img src={profilePic} alt="Profile" className="rounded-full" />
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* FOR DESKTOP */}

      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex space-x-16">
          <div className="flex items-center space-x-6 text-sm">
            {showBackButton && <BackButton />}
            <Logo src={logoSrc} width="112px" height="auto" />
            <nav
              className={`lg:flex space-x-6 items-center ml-6 ${
                hideNavLinks ? "" : linkColor
              }`}
            >
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

        <div className="flex items-center space-x-6">
          {showIcons && (
            <div className="flex space-x-3 text-lg mr-8">
              {["notifications", "message"].map((icon, index) => (
                <a
                  key={index}
                  title={icon}
                  onClick={
                    icon === "notifications"
                      ? onToggleNotification
                      : onToggleChat
                  }
                  className="cursor-pointer"
                >
                  <span className="material-icons">{icon}</span>
                </a>
              ))}
              <Link
                to={
                  userType === "individualServiceProvider" ||
                  userType === "businessServiceProvider"
                    ? "#"
                    : getFavoritesRoute()
                }
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

          {(showSignUpText || showSignInText) && (
            <div className="hidden sm:flex items-center justify-center mt-4 text-sm">
              <span className="text-[#8692A6]">
                {showSignUpText
                  ? "Don’t have an account?"
                  : "Already have an account?"}{" "}
              </span>
              <Link
                to={showSignUpText ? "/signup" : "/signin"}
                className="text-blue-500 ml-1"
              >
                {showSignUpText ? "Sign up" : "Sign in"}
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
