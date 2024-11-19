import StarVector from "../assets/StarVector.png";
import PlumsPic from '../assets/plumsProfilePPicture.png';
import Services from '../components/Service';
import Prices from '../components/Prices';
import CertificationAndQualification from "./CertificationAndQualification";
import DateAvailability from "./DateAvailability";
import RatingsAndReviews from "./RatingsAndReview";
const DetailsSection = ({className = ''}) => {
  return (
    <section className={`bg-blue-50 w-full max-w-[1405px] h-[1690px] rounded-t-lg ${className}`}>
      <div className="flex  justify-between ">
        <div className="block pl-14 pt-3">
        <div className="flex ">
          <h1 className="font-bold text-2xl">   
            Plumbing Services : Plum Plumbing ...
          </h1>
          <img src={StarVector} className="w-7" />
        </div>
        <p className="text-gray-500">4 years in business • 10 hires on Discovaa</p>
        </div>
        <div className="">
            <img src={PlumsPic} className="w-[200px] pt-8" /> 
        </div>
      </div>
        <div className="border border-gray-[#B0B0B0] w-full mt-8 h-0"></div>
        <Services />
        <Prices/>
        <CertificationAndQualification />
        <DateAvailability />
        <RatingsAndReviews />
    </section>
  );
};

export default DetailsSection;
