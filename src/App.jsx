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
import ProfilePicPlaceholder from "./assets/HeaderProfileImg (2).png";
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

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [profilePic, setProfilePic] = useState(ProfilePicPlaceholder);

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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/newpassword" element={<NewPasswordPage />} />
          <Route path="/userfilterpage" element={<UserFilterPage />} />
          <Route path="/userseemorepage" element={<UserSeeMorePage />} />
          <Route path="/favouritepage" element={<FavouritePage />} />
          <Route
            path="/"
            element={
              <UserProfilePersonalinfoPage
                profilePic={profilePic}
                onProfileImageChange={handleProfileImageChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
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
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            }
          />
          <Route
            path="/userdashboard"
            element={
              <UserDashboard
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            }
          />
          <Route
            path="/userverificationcomplete"
            element={
              <UserVerificationCompletePage
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
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
  );
}

export default App;
