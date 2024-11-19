import BookNowSection from "../components/BookNowSection";
import DetailsSection from "../components/DetailsSection";
import Header from "../components/Header";
import Footer from "../components/footer";

const IsvProfilePage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  showModal,
  onBookNowClick,
  onCloseModal
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic || "../assets/HeaderProfileImg (2).png"}
      />
      <div className="relative flex-grow">
        <div className="z-0">
          <BookNowSection 
            showModal={showModal}
            onBookNowClick={onBookNowClick}
            onCloseModal={onCloseModal}
          />
        </div>
        <div>
          <DetailsSection className="mx-auto mt-2 left-3 z-10" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IsvProfilePage;
