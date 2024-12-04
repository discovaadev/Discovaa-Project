import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import RandomSearchPage from "./pages/RandomSearchPage";
import HomePage from "./pages/HomePage";
import SubscriptionPage from "./pages/SubscibePage";
import ContactForm from "./pages/Contact";
import LoginForm from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import SelectSignUpPage1 from "./pages/SelectSignUpPage1";
import SelectSignUpPage2 from "./pages/SelectSignUpPage2";
import IsvEmailPage from "./pages/IsvEmailPage";
import IsvSignUpPage from "./pages/IsvSignUpPage1";
import IsvSignUpPage2 from "./pages/IsvSignUpPage2";
import IsvDashboard from "./pages/Isv-Dashboard";
import UserDashboard from "./pages/UserDashboard";
import ProfilePicPlaceholder from "./assets/UserProfileImg.png";
import UserVerificationCompletePage from "./pages/UserVerificationCompletePage";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import UserSignUpPage from "./pages/UserSignUpPage";
import UserEmailConfirmationPage from "./pages/UserEmailConfirmationPage";
import UserSignUpPage2 from "./pages/UserSignUpPage2";
import BusinessSignUpPage from "./pages/Buisness-SignUp-Page1";
import UserFilterPage from "./pages/UserFilterPage";
import IspProfilePage from "./pages/IspProfilePage";
import UserSeeMorePage from "./pages/UserSeeMorePage";
import FavouritePage from "./pages/FavouritePage";
import UserProfilePersonalinfoPage from "./pages/UserProfilePersonalinfoPage";
import ChatPage from "./pages/ChatPage";
import BuisnessSerViceProviderPage from "./pages/Business-Service-ProviderPage";
import NotificationPage from "./pages/NotificationPage";
import IspProfilePageEdit from "./pages/IspProfilePageEdit";
import IspAvailability from "./components/IspAvailability";
import IspFavoritePage from "./pages/IspFavoritePage";
import IspPersonalProfileInfo from "./pages/IspPersonalProfileInfo";
import BspProfilePage from "./pages/BspProfilePage";
import BspPersonalProfileInfo from "./pages/BspPersonalProfileInfo";
import BspAvailability from "./components/BspAvailability";
import {
  bspNotifications,
  ispNotifications,
  userNotifications,
} from "./data/notifications";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfilePicPlaceholder);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFavoriteOpen, setShowFavorite] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [pageType, setPageType] = useState("UserFilterPage");

  const baseMessages = [
    {
      sender: "user",
      text: "Hi. I’d like to book your services for some pipe repairs at my home on the 1st of March at 12noon. Please confirm if you’d be available.",
      date: "28th February 2024",
    },
    {
      sender: "service",
      text: "Yes, I’ll be available. Please send your address and contact details.",
      date: "",
    },
  ];

  const [messages, setMessages] = useState(baseMessages);

  useEffect(() => {
    const updatedMessages =
      activePage === "IspProfilePage" ||
      activePage === "IspProfilePageEdit" ||
      activePage === "BspProfilePage"
        ? baseMessages.map((message) =>
            message.sender === "user"
              ? {
                  ...message,
                  text: "Hi. I’d like to book your services for my car’s brake repairs at my home on the 1st of March at 12noon. Please confirm if you’d be available.",
                }
              : message
          )
        : baseMessages;

    setMessages(updatedMessages);
  }, [activePage]);

  const handleSend = (text) => {
    const newMessage = {
      sender: "user",
      text,
      date: new Date().toLocaleDateString(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  const handleProfileImageChange = (base64Image) => {
    setProfilePic(base64Image);
  };

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const handleToggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const toggleFavorites = () => {
    setShowFavorite(!isFavoriteOpen);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/userfilterpage") {
      setActivePage("UserFilterPage");
      setPageType("UserFilterPage");
    } else if (location.pathname === "/ispprofilepage") {
      setActivePage("IspProfilePage");
      setPageType("IspProfilePage");
    } else if (location.pathname === "/ispprofilepageedit") {
      setActivePage("IspProfilePageEdit");
      setPageType("IspProfilePageEdit");
    } else if (location.pathname === "/bspprofilepage") {
      setActivePage("BspProfilePage");
      setPageType("BspProfilePage");
    } else {
      setActivePage("UserFilterPage");
      setPageType("UserFilterPage");
    }
  }, [location.pathname]);

  const notifications =
    activePage === "UserFilterPage"
      ? userNotifications
      : activePage === "IspProfilePage" || activePage === "IspProfilePageEdit"
      ? ispNotifications
      : activePage === "BspProfilePage"
      ? bspNotifications
      : [];
  console.log("Notifications for", activePage, ":", notifications);

  const headerName =
    activePage === "UserFilterPage"
      ? "Plum Plumbing Service"
      : activePage === "IspProfilePage" ||
        activePage === "IspProfilePageEdit" ||
        activePage === "BspProfilePage"
      ? "Mart Jaan"
      : "Unknown";

  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/newpassword" element={<NewPasswordPage />} />
          <Route path="/ispavailability" element={<IspAvailability />} />
          <Route path="/bspavailability" element={<BspAvailability />} />
          <Route
            path="/isppersonalprofileinfo"
            element={
              <IspPersonalProfileInfo
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />
          <Route
            path="/bsppersonalprofileinfo"
            element={
              <BspPersonalProfileInfo
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />

          <Route
            path="/businessserviceproviderpage"
            element={
              <BuisnessSerViceProviderPage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />
          <Route
            path="/"
            element={
              <UserFilterPage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
              />
            }
          />
          <Route
            path="/userseemorepage"
            element={
              <UserSeeMorePage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
              />
            }
          />
          <Route
            path="/favouritepage"
            element={
              <FavouritePage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
              />
            }
          />
          <Route
            path="/userprofilepersonalinfopage"
            element={
              <UserProfilePersonalinfoPage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />
          <Route
            path="/ispprofilepage"
            element={
              <IspProfilePage
                showModal={showModal}
                onBookNowClick={handleBookNowClick}
                onCloseModal={closeModal}
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route
            path="/bspprofilepage"
            element={
              <BspProfilePage
                showModal={showModal}
                onBookNowClick={handleBookNowClick}
                onCloseModal={closeModal}
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route
            path="/ispprofilepageedit"
            element={
              <IspProfilePageEdit
                showModal={showModal}
                onBookNowClick={handleBookNowClick}
                onCloseModal={closeModal}
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route path="/usersignuppage2" element={<UserSignUpPage2 />} />
          <Route path="/usersignuppage" element={<UserSignUpPage />} />
          <Route
            path="/useremailconfirmation"
            element={<UserEmailConfirmationPage />}
          />
          <Route path="/businesssignup" element={<BusinessSignUpPage />} />
          <Route
            path="/isvDashboard"
            element={
              <IsvDashboard
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />
          <Route
            path="/userdashboard"
            element={
              <UserDashboard
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
              />
            }
          />
          <Route
            path="/userverificationcomplete"
            element={
              <UserVerificationCompletePage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
              />
            }
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otpverification" element={<OtpVerificationPage />} />
          <Route path="/isvsignup2" element={<IsvSignUpPage2 />} />
          <Route path="/isvsignup" element={<IsvSignUpPage />} />
          <Route path="/isvemail" element={<IsvEmailPage />} />
          <Route path="/select" element={<SelectSignUpPage2 />} />
          <Route path="/signup" element={<SelectSignUpPage1 />} />
          <Route
            path="/error"
            element={
              <ErrorPage
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/subscribe"
            element={
              <SubscriptionPage
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            }
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/search"
            element={
              <RandomSearchPage
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>

      {isChatOpen && (
        <ChatPage
          onClose={closeChat}
          messages={messages}
          onSend={handleSend}
          activePage={activePage}
          headerName={headerName}
        />
      )}

      {isNotificationOpen && (
        <NotificationPage
          onClose={closeNotification}
          notifications={notifications}
          pageType={pageType}
        />
      )}

      {isFavoriteOpen && (
        <div className="fixed top-20 left-[60%]">
          <IspFavoritePage />
        </div>
      )}
    </div>
  );
}

export default App;
