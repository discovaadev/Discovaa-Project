import StarVector from "../assets/StarVector.png";
import BookingInterface from "./BookingInterface";

function BookNowSection({
  name,
  rating,
  reviews,
  location,
  images,
  showButton = true,
  showModal = false,
  showStar = true,
  onBookNowClick,
  onCloseModal,
}) {
  const [mainImage, ...otherImages] = images;

  return (
    <div className="p-3 lg:px-4">
      <div className="flex flex-col mt-8 justify-between lg:items-center lg:mb-4 lg:p-12 lg:flex-row">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">{name}</h1>
            {showStar && (
              <img
                src={StarVector}
                className="w-[28px] ml-3"
                alt="Star Rating"
              />
            )}
          </div>
          <p className="text-gray-500 font-semibold">
            ★ {rating} • {reviews} Reviews • {location}
          </p>
        </div>
        {showButton && (
          <button
            onClick={onBookNowClick}
            className="bg-black text-white py-4 px-10 rounded-md md:w-3/12 lg:w-[200px]"
          >
            Book Now
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full  ">
        <div className="col-span-2 lg:translate-x-12">
          <img
            src={mainImage}
            alt="Main Profile"
            className="w-full max-w-4xl h-[500px] object-cover rounded-sm hidden md:block"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 w-full mt-4 lg:max-w-2xl lg:-translate-x-10 lg:mt-0">
          {otherImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Profile ${index + 1}`}
              className="w-full lg:h-60 object-cover rounded-sm"
            />
          ))}
        </div>
      </div>
      {showModal && (
        <div>
          <BookingInterface onClose={onCloseModal} />
        </div>
      )}
    </div>
  );
}

export default BookNowSection;
