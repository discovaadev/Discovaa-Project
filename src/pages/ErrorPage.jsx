import Astronaut from "../assets/AstronutImg.png";
import RedPlanet from "../assets/Ellipse.png";
import FourLeft from "../assets/Fourleft.png";
import FourRight from "../assets/FourRight.png";
import Header from "../components/Header";
import Footer from "../components/footer.jsx";
import BGImage from "../assets/BG.png";

export default function ErrorPage({ searchQuery, onSearchChange }) {
  return (
    <section className="h-screen flex flex-col bg-black relative overflow-hidden text-white">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        showSearch={true}
        showProfile={false}
        linkColor="text-white"
        className="z-10"
        showIcons={false}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <div
        className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-screen h-[110vh] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BGImage})`, zIndex: "0" }}
      ></div>
      <div className="flex-grow flex justify-between items-center relative ">
        <div className="pt-12 pl-16">
          <div className="flex items-center">
            <img
              src={FourLeft}
              alt="fourleft"
              className="w-[100px] h-[100px] mr-2"
            />
            <img
              src={RedPlanet}
              alt="red planet"
              className="w-[105px] h-[105px] mx-2"
            />
            <img
              src={FourRight}
              alt="fourright"
              className="w-[100px] h-[100px] ml-2"
            />
          </div>
          <p className="max-w-[430px] mt-28 font-inter font-medium text-lg">
            Sorry, we couldn’t find the page you’re looking for
          </p>
        </div>

        <div className="absolute bottom-1 right-0 mr-[380px] w-[280px]">
          <img src={Astronaut} alt="astronaut" className="w-full h-auto" />
        </div>
      </div>

      <Footer className="z-10" />
    </section>
  );
}
