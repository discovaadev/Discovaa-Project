import Astronaut from "../assets/AstronutImg.png";
import RedPlanet from "../assets/Ellipse.png";
import FourLeft from "../assets/Fourleft.png";
import FourRight from "../assets/FourRight.png";
import Header from "../Header";
import Footer from "../Footer/footer";

export default function ErrorPage() {
  return (
    <section className="h-screen flex flex-col bg-black relative overflow-hidden text-white">
      <Header />
      
      {/* Background Overlay */}
      <div className="absolute top-[-40px] left-[60%] transform -translate-x-1/2 w-screen h-[110vh] bg-cover bg-no-repeat bg-center z-0" style={{ backgroundImage: `url('../../assets/BG.png')` }}></div>
      
      {/* Content Section */}
      <div className="flex-grow flex justify-between items-center relative">
        
        {/* Error Message Section */}
        <div className="pt-12 pl-16">
          <div className="flex items-center">
            <img src={FourLeft} alt="fourleft" className="w-[100px] h-[100px] -ml-2" />
            <img src={RedPlanet} alt="red planet" />
            <img src={FourRight} alt="fourright" className="w-[100px] h-[100px] -mr-2" />
          </div>
          <p className="mt-28 max-w-[430px] font-inter font-medium text-[20px]">
            Sorry, we couldn’t find the page you’re looking for
          </p>
        </div>

        {/* Astronaut Image */}
        <div className="absolute bottom-5 right-0 mr-[320px] w-[280px]">
          <img src={Astronaut} alt="astronaut" className="w-full h-auto" />
        </div>
      </div>

      <Footer />
    </section>
  );
}
