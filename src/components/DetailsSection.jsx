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
      className={` lg:bg-blue-50 w-full max-w-[1405px]  rounded-t-lg ${className}`}
    >
      <div className="flex flex-col items-center lg:flex-row justify-between  ">
        <div className="block mt-4 lg:p-14 lg:h-14 mt-0">
          <div className="flex ">
            <h1 className="text-sm font-bold lg:font-bold lg:text-2xl">{title}</h1>
            {showStar && <img src={StarVector} className="w-7" />}
          </div>
          <p className="text-gray-500 -translate-y-2 md:-translate-y-0">{description}</p>
        </div>
        <div className="">
          <img src={imageSrc} className="w-[200px] pt-8 " />
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
