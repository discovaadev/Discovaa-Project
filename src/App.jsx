import { useState } from "react";
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
import IsvProfilePage from "./pages/IspProfilePage";
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
import IsvProfilePageEdit from "./pages/IspProfilePageEdit";
import MartPic from "./assets/MartPicImg.png";
import Khrisjan from "./assets/KristJanPicImg.png";
import MariLiis from "./assets/MariPicImg.png";
import KatiPic from "./assets/KatyPicImg.png";
import Priit from "./assets/PriitPicImg.png";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(ProfilePicPlaceholder);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [headerName, setHeaderName] = useState("Plum Plumbing Services");
  const [activePage, setActivePage] = useState("UserFilterPage");
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

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
    setHeaderName("Mart Jaan");
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

  const userNotifications = [
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
      text: "confirmed booking for:",
      name: "Jason Doe",
      date: "2nd February 2024",
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
      type: "Confirmed Booking",
      section: "Latest",
      image: PlumsMini,
      name: "Plum Plumbing Services",
      text: "confirmed booking for",
      Date: "2nd February 2024",
      time: "8AM",
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
      Date: "2nd February 2024",
      time: "8AM",
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
      text: "confirmed booking for:",
      Date: "2nd February 2024",
      time: "8AM",
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

  const ispNotifications = [
    {
      type: "New Message",
      section: "Latest",
      image: MartPic,
      name: "Mart Jaan",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 hour ago",
    },

    {
      type: "Confirmed Booking",
      section: "Latest",
      image: MartPic,
      text: "confirmed booking for:",
      name: "Mart Jaan",
      Date: "2nd February 2024",
      time: "8AM",
    },
    {
      type: "New Message",
      section: "Latest",
      image: Khrisjan,
      name: "Kristjan Tõnis",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "2 hour ago",
    },

    {
      type: "Confirmed Booking",
      section: "Latest",
      image: Khrisjan,
      text: "confirmed booking for:",
      name: "Kristjan Tõnis",
      Date: "2nd February 2024",
      time: "8AM",
    },

    {
      type: "New Message",
      section: "Previous",
      image: MariLiis,
      name: "Mari Liis",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "12 hour ago",
    },
    {
      type: "Confirmed Booking",
      section: "Previous",
      image: MariLiis,
      text: "confirmed booking for:",
      name: "Mari Liis",
      Date: "2nd February 2024",
      time: "8AM",
    },
    {
      type: "New Message",
      section: "Previous",
      image: KatiPic,
      name: "Kati Kristiina",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 day ago",
    },

    {
      type: "Confirmed Booking",
      section: "Previous",
      image: KatiPic,
      text: "confirmed booking for:",
      name: "Kati Kristiina",
      Date: "2nd February 2024",
      time: "8AM",
    },

    {
      type: "New Message",
      section: "Previous",
      image: Priit,
      name: "Priit Maarja",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 day ago",
    },
  ];
  const bspNotifications = [
    {
      type: "New Message",
      section: "Latest",
      image: MartPic,
      name: "Mart Jaan",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 hour ago",
    },

    {
      type: "Confirmed Booking",
      section: "Latest",
      image: MartPic,
      text: "confirmed booking for:",
      name: "Mart Jaan",
      Date: "2nd February 2024",
      time: "8AM",
    },

    {
      type: "New Message",
      section: "Latest",
      image: Khrisjan,
      name: "Kristjan Tõnis",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "2 hour ago",
    },

    {
      type: "Confirmed Booking",
      section: "Latest",
      image: Khrisjan,
      text: "confirmed booking for:",
      name: "Kristjan Tõnis",
      Date: "2nd February 2024",
      time: "8AM",
    },
    {
      type: "New Message",
      section: "Previous",
      image: MariLiis,
      name: "Mari Liis",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "12 hour ago",
    },
    {
      type: "New Message",
      section: "Previous",
      image: KatiPic,
      name: "Kati Kristiina",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 day ago",
    },
    {
      type: "New Message",
      section: "Previous",
      image: Priit,
      name: "Priit Maarja",
      text: "sent a message to you",
      message:
        "I’d like to confirm if you would be available for a plumbing job next weekend.",
      time: "1 day ago",
    },
  ];

  const notifications =
    activePage === "UserFilterPage"
      ? userNotifications
      : activePage === "IspProfilePage" || activePage === "IspProfilePageEdit"
      ? ispNotifications
      : activePage === "bspProfilePage"
      ? bspNotifications
      : [];

  return (
    <div>
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
          <Route
            path="/isvprofilepageedit"
            element={
              <IsvProfilePageEdit
                showModal={showModal}
                onBookNowClick={handleBookNowClick}
                onCloseModal={closeModal}
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                onToggleChat={handleToggleChat}
                onToggleNotification={handleToggleNotification}
                headerName={headerName}
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
        <ChatPage
          onClose={closeChat}
          messages={messages}
          onSend={handleSend}
          headerName={headerName}
        />
      )}
      <div>
        <button onClick={() => setActivePage("UserFilterProfile")}>
          User Profile
        </button>
        <button onClick={() => setActivePage("IspProfilePage")}>
          ISP Profile
        </button>
        <button onClick={() => setActivePage("IspProfilePageEdit")}>
          ISP Profile Edit
        </button>
        <button onClick={() => setActivePage("BspProfilePage")}>
          BSP Profile
        </button>
      </div>

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
