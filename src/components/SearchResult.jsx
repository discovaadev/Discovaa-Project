import ServiceCard from "../components/ServiceCard";
import PhotoImg from "../assets/PhotoImg copy 2.png";
import CarpenterImg from "../assets/CarpenterImg.png";
import Medic from "../assets/medic.png";
import PhotographerImg from "../assets/PhotoSm.png";
import { Link } from "react-router-dom";

function SearchResults() {
  const services = [
    { title: "Photographer", location: "Tallinn, Estonia", imgSrc: PhotoImg },
    { title: "Photographer", location: "Tallinn, Estonia", imgSrc: PhotoImg },
    { title: "Photographer", location: "Tallinn, Estonia", imgSrc: PhotoImg },
    { title: "Photographer", location: "Tallinn, Estonia", imgSrc: PhotoImg },
  ];

  return (
    <section className="p-5 md:p-10">
      <h1 className="font-medium text-xl">Search Result services in Tallinn</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 mt-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            location={service.location}
            imgSrc={service.imgSrc}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-28">
        <div className="flex flex-col mb-5 md:mb-0">
          <h3 className="text-xl mb-2 font-semibold">
            Popular services in Tallinn, Estonia
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-full sm:w-auto">
              <img
                src={CarpenterImg}
                alt="carpenter"
                className="w-full sm:w-[176px] h-auto"
              />
              <p className="text-sm text-center">Carpenter</p>
            </div>
            <div className="w-full sm:w-auto">
              <img
                src={PhotographerImg}
                alt="photographer"
                className="w-full sm:w-[176px] h-auto"
              />
              <p className="text-sm text-center">Photographer</p>
            </div>
            <div className="w-full sm:w-auto">
              <img
                src={Medic}
                alt="medic"
                className="w-full sm:w-[176px] h-auto"
              />
              <p className="text-sm text-center">Specialized Care</p>
            </div>
          </div>
        </div>

        <div className="mt-3 mr-[130px] md:mt-0">
          <h4 className="font-semibold">Are you a professional?</h4>
          <p className="text-sm font-normal">
            Sign up for free to find new customers
          </p>
          <Link to="/select">
            <button className="bg-black text-white py-2 px-6 mt-3 rounded-md transition duration-300 hover:bg-gray-700">
              Register as an artisan
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
