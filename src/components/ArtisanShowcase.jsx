import Reviews from "../assets/Reviews@2x.png";
import engineerPhotos from "../assets/engineerPhotos.png";
import Person from "../assets/person.png";
import EmailFrame from "../assets/email-black-24-dp-1-1.svg";
import { Link } from "react-router-dom";

function ReviewsHeader() {
  return (
    <div className="bg-black h-[110px] flex items-center px-[80px] relative">
      <img src={Reviews} alt="reviews" className="w-[350px] ml-[20px]" />
      <img
        src={engineerPhotos}
        alt="engineer"
        className="w-[310px] absolute right-[180px] bottom-0"
      />
    </div>
  );
}

function ReviewsCard() {
  return (
    <div className="bg-[#fff9f5] h-[422px]">
      <div className="flex justify-between px-[150px] py-[105px]">
        <div className="w-[260px] h-[260px] bg-black rounded-lg flex items-center justify-center">
          <img src={Person} alt="person" className="w-[260px] mt-[-74px]" />
        </div>
        <div className="flex flex-col ml-[15px] mt-[-40px]">
          <div className="font-sans text-[26px] font-extrabold mb-[20px]">
            <h2>
              All expertise on <br /> one platform
            </h2>
          </div>
          <p className="font-light w-[258px]">
            We take your needs very seriously, which is why we use advanced
            verification protocols to protect everyone.
          </p>
          <div className="relative flex items-center mt-5 max-w-[362px] h-[32px]">
            <div className="absolute w-[90%] h-full right-[18px] bg-[#fff9f5] shadow"></div>
            <div className="flex items-center gap-3 relative left-[18px]">
              <img src={EmailFrame} alt="Email Icon" className="w-6 h-6" />
              <span className="text-[#00000099] text-sm font-normal">
                Your email address |
              </span>
            </div>
            <Link to="/subscribe" className="z-0">
              <button className="w-[141px] h-[30px] bg-cover bg-center bg-[url('./assets/rectangle-4.svg')] text-white font-light text-sm flex items-center justify-center ml-[37px] cursor-pointer z-0">
                Get early access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtisanShowcase() {
  return (
    <div className="bg-white">
      <ReviewsHeader />
      <ReviewsCard />
    </div>
  );
}
