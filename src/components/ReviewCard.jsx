
import Rating from '../components/Rating';

function ReviewCard({ image, name, date, reviewText, rating }) {
  return (
    <div className="flex flex-col items-start p-4  w-[360px] rounded-lg shadow-sm border-2 border-gray-300">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-[70px] h-[70px] rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <Rating value={rating} /> 
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-700">{reviewText}</p>
    </div>
  );
}

export default ReviewCard;
