import BookNowSection from "../components/BookNowSection";
import DetailsSection from "../components/DetailsSection";
import Header from "../components/Header";
import Footer from "../components/footer";
import mainProfile from "../assets/PlumProfileImg.png";
import profileImg1 from "../assets/PlumProfile2.png";
import profileImg2 from "../assets/PlumProfile3.png";
import profileImg4 from "../assets/PlumProfile4.png";
import profileImg5 from "../assets/PlumProfile5.png";
import PlumsPic from "../assets/plumsProfilePPicture.png";

const IspProfilePage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onBookNowClick,
  showModal,
  onCloseModal,
  onToggleChat,
  onToggleNotification,
  toggleFavorites
}) => {
  const userServices = [
    ["Plumbing", "Water Heater"],
    ["Plumbing", "Water Heater"],
    ["Plumbing", "Water Heater"],
  ];

  return (
    <div className="">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/isvdashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onToggleChat={onToggleChat}
        onToggleNotification={onToggleNotification}
        toggleFavorites={toggleFavorites}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic}
        userType="individualServiceProvider"
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        showProfilePic = {true}
        enableTabletHeader = {true}
      />
      <div className="relative flex-grow">
        <div className="z-0">
          <BookNowSection
            name="Plum Plumbing Services"
            rating="5.0"
            reviews="10"
            location="Narva, 20303 • PS012345"
            images={[
              mainProfile,
              profileImg1,
              profileImg2,
              profileImg4,
              profileImg5,
            ]}
            showButton={true}
            showStar={true}
            showModal={showModal}
            onBookNowClick={onBookNowClick}
            onCloseModal={onCloseModal}
          />
        </div>
        <div>
          <DetailsSection
            className="mx-auto mt-2 left-3 z-10"
            imageSrc={PlumsPic}
            services={userServices}
            servicesClassName="gap-96"
            isIsvProfile={false}
            forIsvProfile={false}
            stillIsvProfile={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IspProfilePage;
