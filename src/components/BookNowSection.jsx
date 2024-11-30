import StarVector from '../assets/StarVector.png';
// import mainProfile from '../assets/PlumProfileImg.png';
// import profileImg1 from '../assets/PlumProfile2.png';
// import profileImg2 from '../assets/PlumProfile3.png';
// import profileImg4 from '../assets/PlumProfile4.png';
// import profileImg5 from '../assets/PlumProfile5.png';
import BookingInterface from './BookingInterface';

// function BookNowSection({ showModal, onBookNowClick, onCloseModal }) {
//   return (
//     <div className="px-4">
//       <div className="flex justify-between items-center mb-4 p-12">
//         <div>
//           <div className="flex">
//             <h1 className="text-3xl font-bold">Plum Plumbing Services</h1>
//             <img src={StarVector} className="w-[28px] ml-3" alt="Star Rating" />
//           </div>
//           <p className="text-gray-500 font-semibold">
//             ★ 5.0 • 10 Reviews • Narva, 20303 • PS012345
//           </p>
//         </div>
//         <button
//           onClick={onBookNowClick}
//           className="bg-black text-white py-4 px-10 rounded-md"
//         >
//           Book Now
//         </button>
//       </div>
//       <div className="grid grid-cols-3 w-full px-10">
//         <div className="col-span-2">
//           <img
//             src={mainProfile}
//             alt="Main plumbing"
//             className="w-full max-w-4xl h-[500px] object-cover rounded-sm"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-3 w-full md:max-w-lg lg:max-w-2xl">
//           <img src={profileImg1} alt="Plumbing 1" className="w-full h-60 object-cover" />
//           <img src={profileImg2} alt="Plumbing 2" className="w-full h-60 object-cover rounded-sm" />
//           <img src={profileImg4} alt="Plumbing 3" className="w-full h-60 object-cover rounded-sm" />
//           <img src={profileImg5} alt="Plumbing 4" className="w-full h-60 object-cover rounded-sm" />
//         </div>
//       </div>
//       {showModal && (
//         <div>
//           <BookingInterface onClose={onCloseModal} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookNowSection;


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
    <div className="px-4">
      <div className="flex justify-between items-center mb-4 p-12">
        <div>
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">{name}</h1>
            {showStar && <img src={StarVector} className="w-[28px] ml-3" alt="Star Rating" />}
          </div>
          <p className="text-gray-500 font-semibold">
            ★ {rating} • {reviews} Reviews • {location}
          </p>
        </div>
        {showButton && (
          <button
            onClick={onBookNowClick}
            className="bg-black text-white py-4 px-10 rounded-md"
          >
            Book Now
          </button>
        )}
      </div>
      <div className="grid grid-cols-3 w-full px-10">
        <div className="col-span-2">
          <img
            src={mainImage}
            alt="Main Profile"
            className="w-full max-w-4xl h-[500px] object-cover rounded-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:max-w-lg lg:max-w-2xl">
          {otherImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Profile ${index + 1}`}
              className="w-full h-60 object-cover rounded-sm"
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
