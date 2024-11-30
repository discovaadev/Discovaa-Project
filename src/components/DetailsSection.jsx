import StarVector from "../assets/StarVector.png";
import Services from "../components/Service";
import Prices from "../components/Prices";
import CertificationAndQualification from "./CertificationAndQualification";
import DateAvailability from "./DateAvailability";
import RatingsAndReviews from "./RatingsAndReview";
const DetailsSection = ({
  className = "",
  title = " Plumbing Services : Plum Plumbing ...",
  description = "4 years in business • 10 hires on Discovaa",
  showStar = true,
  imageSrc,
  services = [],
  servicesClassName = "",
  isIsvProfile, 
  forIsvProfile,
  stillIsvProfile
}) => {
  return (
    <section
      className={`bg-blue-50 w-full max-w-[1405px] h-[1690px] rounded-t-lg ${className}`}
    >
      <div className="flex justify-between ">
        <div className="block p-14 h-14">
          <div className="flex ">
            <h1 className="font-bold text-2xl">{title}</h1>
            {showStar && <img src={StarVector} className="w-7" />}
          </div>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="">
          <img src={imageSrc} className="w-[200px] pt-8" />
        </div>
      </div>
      <div className="border border-gray-[#B0B0B0] w-full mt-8 h-0"></div>
      <Services services={services} className={servicesClassName} />
      <Prices isIsvProfile={isIsvProfile}  />
      <CertificationAndQualification forIsvProfile={forIsvProfile} />
      <DateAvailability stillIsvProfile={stillIsvProfile} />
      <RatingsAndReviews />
    </section>
  );
};

export default DetailsSection;
