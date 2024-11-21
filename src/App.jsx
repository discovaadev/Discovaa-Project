import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import IsvProfilePage from "./pages/IsvProfilePage";
import UserSeeMorePage from "./pages/UserSeeMorePage";
import FavouritePage from "./pages/FavouritePage";
import UserProfilePersonalinfoPage from "./pages/UserProfilePersonalinfoPage";
import ChatPage from "./pages/ChatPage";
import BuisnessSerViceProviderPage from "./pages/Business-Service-ProviderPage";
import NotificationPage from "./pages/NotificationPage";
import JasonDoeMini from "./assets/JasonDoeMini.png";
import PlumsMini from "./assets/PlumMini.png";
import AmberMini from "./assets/AmberMini.png";
import SamMini from "./assets/SamsMini.png";
import JakeMini from "./assets/JakePullMini.png";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfilePicPlaceholder);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Hi. I’d like to book your services for some pipe repairs at my home on the 1st of March at 12noon. Please confirm if you’d be available.",
      date: "28th February 2024",
    },
    {
      sender: "service",
      text: "Yes, I’ll be available.Please send your address andcontact details",
      date: "",
    },
  ]);

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

  const [showModal, setShowModal] = useState(false);

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

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  const notifications = [
    {
      type: "New Message",
      section: "Latest",
      image: JasonDoeMini,
      name: "Jason Doe",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "1 hour ago",
    },
    {
      type: "Confirmed Booking",
      section: "Latest",
      image: JasonDoeMini,
      name: "Jason Doe",
      text: "confirmed booking for:",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "8AM",
    },

    {
      type: "New Message",
      section: "Latest",
      image: PlumsMini,
      name: "Plum Plumbing Services",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "2 hours ago",
    },
    {
      type: "New Message",
      section: "Previous",
      image: AmberMini,
      name: "Amber's Photography",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "12 hours ago",
    },
    {
      type: "Confirmed Booking",
      section: "Previous",
      image: AmberMini,
      name: "Amber's Photography",
      text: "confirmed booking for:",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "12 hours ago",
    },
    {
      type: "New Message",
      section: "Previous",
      image: SamMini,
      name: "Sam's Electronics",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "1 day ago",
    },
    {
      type: "Confirmed Booking",
      section: "Previous",
      image: SamMini,
      name: "Sam's Electronics",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "1 day ago",
    },
    {
      type: "New Message",
      section: "Previous",
      image: JakeMini,
      name: "JackPull Autos",
      text: "sent a message to you",
      message:
        "Yes, I’ll be available. Please send your address and contact details.",
      time: "2 days ago",
    },
  ];

  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/newpassword" element={<NewPasswordPage />} />
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
              path="/isvprofilepage"
              element={
                <IsvProfilePage
                  showModal={showModal}
                  onBookNowClick={handleBookNowClick}
                  onCloseModal={closeModal}
                  profilePic={profilePic}
                  onProfileImageChange={handleProfileImageChange}
                  onToggleChat={handleToggleChat}
                  onToggleNotification={handleToggleNotification}
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
      </Router>
      {isChatOpen && (
        <ChatPage onClose={closeChat} messages={messages} onSend={handleSend} />
      )}
      {/* <Dashboard
        profilePic={profilePic}
        onProfileImageChange={handleProfileImageChange}
      /> */}
      {isNotificationOpen && (
        <NotificationPage
          onClose={closeNotification}
          notifications={notifications}
        />
      )}
    </div>
  );
}

export default App;
