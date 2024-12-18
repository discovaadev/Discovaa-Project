import Logo from "../components/logo.jsx";
import photographer from "../assets/photographer (1).png";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";
import Avater from "../components/Avater";
import WhiteLogo from "../assets/WhiteLogo.png";
import Header from "../components/Header";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true, 
  slidesToShow: 1,
  slidesToScroll: 1, 
  autoplay: true, 
  autoplaySpeed: 3000, 
  dots: true, 
};
export default function HeroSection() {
  return (
    <section className="w-full overflow-y-hidden md:bg-[url('./assets/blackBacGround.png')] bg-cover bg-center bg-no-repeat h-screen max-h-[700px] relative ">
      <div className=" md:flex flex-col items-center w-full relative">
        <div className="w-full">
          <Header
            linkColor="text-white"
            bgColor="bg-black"
            showSearch={false}
            showProfile={false}
            showIcons={false}
            customLinks={[
              { href: "/", label: "Home" },
              { href: "/pricing", label: "Pricing" },
              { href: "/error", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ]}
            showAuthButtons={true}
            showAvaterNlogo={true}
          />
        </div>
        <div className="hidden md:block hero-content flex-col items-center justify-center mt-40">
          <div className="hero-images flex justify-between max-w-4xl w-full mx-auto mt-28 md:max-w-4xl">
            <img
              src={worker2}
              alt="Worker 2"
              className="hero-image shape-left w-72 md:w-60"
            />
            <img
              src={photographer}
              alt="Photographer"
              className="hero-image shape-center relative -top-48 z-10 w-72 md:w-60"
            />
            <img
              src={worker1}
              alt="Worker 1"
              className="hero-image shape-right w-72 md:w-60"
            />
          </div>

          <div className="hero-text text-center mt-8">
            <Avater />
            <div className="inter-text-cont mt-[-249px] ml-3">
              <Logo src={WhiteLogo} className="w-[263px]" />
              <p className="text text-white font-extralight mt-[-27px] text-lg ">
                All expertise on one platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto md:hidden w-full h-full mt-4">
        <Slider {...settings}>
          <div>
            <img src={worker2} alt="Worker 2" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={photographer} alt="Photographer" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={worker1} alt="Worker 1" className="w-full h-full object-cover" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
