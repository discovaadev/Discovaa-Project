import Rating from "./Rating";
// import StatusBadge from "./StatusBadge";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import '../styles/CustomStyles.css';

const ServiceProviderCard = ({ provider,  onViewContact }) => {
  const {
    name,
    category,
    rating,
    description,
    location,
    // registered,
    // regCode,
    image,
  } = provider;

  return (
    <div className="rounded-lg md:w-[411px]  overflow-hidden">
      <img src={image} alt={name} className="w-[350px] lg:w-[411px]  object-cover"/>

      <div className="p-4 flex flex-col items-center md:items-start lg:items-center">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          
        </div>
        <div className="flex items-center ">
          <p className="text-base text-gray-600 mb-1 mr-1">{category}</p>
          <p className="mr-2">•</p>
          <Rating value={rating} />
        </div>
        <p className="w-[300px] md:text-sm font-light text-gray-700 mt-2 mb-4 line-clamp-3 ">
          {description}
        </p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <LocationMarkerIcon className="h-4 w-4 mr-1 text-gray-400" />
          <span>{location}</span>
        </div>
        <button className="mt-6 w-60 flex items-center justify-center  bg-black text-white font-semibold py-2 rounded-lg" onClick={() => onViewContact(name)}>
          View Contact
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
