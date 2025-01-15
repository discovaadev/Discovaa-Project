import Astronaut from "../assets/AstronutImg.png";
import RedPlanet from "../assets/Ellipse.png";
import FourLeft from "../assets/Fourleft.png";
import FourRight from "../assets/FourRight.png";
import Header from "../components/Header";
import Footer from "../components/footer.jsx";
import BGImage from "../assets/BG.png";

export default function ErrorPage({
  searchQuery,
  onSearchChange,
  onProfileImageChange,
  profilePic,
}) {
  return (
    <section className="h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        showSearch={true}
        showProfile={false}
        linkColor="text-white"
        className="z-10"
        showIcons={false}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showMobileLogo={true}
        showMenuIcon={true}
        showSearchButton={true}
        enableTabletHeader={true}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic}
      />

      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-40"
        style={{ backgroundImage: `url(${BGImage})` }}
      ></div>

      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative z-10">
        <div className="flex items-center justify-center space-x-2">
          <img
            src={FourLeft}
            alt="404 Left"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          />
          <img
            src={RedPlanet}
            alt="Red Planet"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          />
          <img
            src={FourRight}
            alt="404 Right"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          />
        </div>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-md font-medium">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>

      {/* <div className="absolute bottom-0 right-0 w-48 sm:w-56 md:w-64 lg:w-72">
        <img
          src={Astronaut}
          alt="Astronaut floating"
          className="w-full h-auto"
        />
      </div> */}

      <Footer className="z-10" />
    </section>
  );
}
