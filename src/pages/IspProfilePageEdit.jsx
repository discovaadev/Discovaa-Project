import BookNowSection from "../components/BookNowSection";
import DetailsSection from "../components/DetailsSection";
import Header from "../components/Header";
import Footer from "../components/footer";
import mainProfile from "../assets/DoeProfileImg.png";
import profileImg1 from "../assets/DoeProfile2.png";
import profileImg2 from "../assets/DoeProfile3.png";
import profileImg4 from "../assets/DoeProfile4.png";
import profileImg5 from "../assets/DoeProfile5.png";
import jasonPic from "../assets/JasonPic.png";

const IspProfilePageEdit = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat,
  onToggleNotification,
  headerName,
}) => {
  const isvServices = [
    ["Engine repairs", "Brake repairs"],
    ["Transmission repairs", "Electrical system repairs"],
    ["Exhaust repairs", "General servicing"],
  ];

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
          { href: "/userdashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onToggleChat={onToggleChat}
        onToggleNotification={onToggleNotification}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic}
        userType="endUser"
        headerName={headerName}
      />
      <div className="relative flex-grow">
        <div className="z-0">
          <BookNowSection
            name="Jason Doe"
            rating="4.5"
            reviews="10"
            location="Tartu, 50050"
            images={[
              mainProfile,
              profileImg1,
              profileImg2,
              profileImg4,
              profileImg5,
            ]}
            showButton={false}
            showStar={false}
            showModal={false}
          />
        </div>
        <div>
          <DetailsSection
            className="mx-auto mt-2 left-3 z-10"
            title="Jason Doe: Car Maintenance"
            description="4 years in business
•
10 hires on Discovaa"
            showStar={false}
            imageSrc={jasonPic}
            services={isvServices}
            servicesClassName="gap-[300px]"
            isIsvProfile={true}
            forIsvProfile={true}
            stillIsvProfile={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IspProfilePageEdit;
