import LilSlim from "../assets/LilSlim.png";
import Tonis from "../assets/TonisThomas.png";
import Khrist from "../assets/PritImg.png";
import Anneli from "../assets/Anneli.png";
import Ene from "../assets/Ene.png";
import jaan from "../assets/JaanMartin.png";
import ReviewCard from "./ReviewCard";

function RatingsAndReviews() {
  const reviews = [
    {
      image: LilSlim,
      name: "Liis Siim",
      date: "January 2024",
      rating: 5,
      reviewText:
        "Plum Plumbing Services is my go-to for any plumbing needs – reliable and professional! Friendly service and top-notch workmanship.",
    },
    {
      image: Tonis,
      name: "Tõnis Toomas",
      date: "January 2024",
      rating: 5,
      reviewText:
        "Friendly service and top-notch workmanship – Plum Plumbing Services exceeded my expectations. Very professional.",
    },
    {
      image: Khrist,
      name: "Priit Khristjan",
      date: "January 2024",
      rating: 5,
      reviewText:
        "Professional, honest, and efficient – Plum Plumbing Services gets the job done right. Plum Plumbing Services is a gem.",
    },
    {
      image: Anneli,
      name: "Anneli Rasmus",
      date: "January 2024",
      rating: 3,
      reviewText:
        "English-speaking team and excellent customer service – Plum Plumbing Services is a gem. Plum Plumbing Services always delivers.",
    },
    {
      image: Ene,
      name: "Ene Aivar",
      date: "January 2024",
      rating: 4,
      reviewText:
        "Trustworthy and dependable – Plum Plumbing Services always delivers. Trustworthy and dependable – Plum Plumbing Services  delivers.",
    },
    {
      image: jaan,
      name: "Jaan Martin",
      date: "January 2024",
      rating: 5,
      reviewText:
        "Highly recommend Plum Plumbing Services for their reliable and friendly approach. Professional, honest, and efficient.",
    },
  ];

  return (
    <section className="w-full">
        <div className="flex justify-between  mt-12">
          <h2 className="text-2xl font-semibold mb-2 pl-[50px]">Ratings and Reviews</h2>
          <div className="flex items-center text-gray-600 mb-6 pr-[165px] ml-20">
            <span className="text-xl">★ 4.5</span>
            <span className="ml-2">10 Reviews</span>
          </div>
        </div>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto py-12 ">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image={review.image}
              name={review.name}
              date={review.date}
              reviewText={review.reviewText}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
        <button className="mt-6 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center mx-auto">
          See all 10 Reviews
          <svg
          className="ml-1 w-5 h-5 transform transition-transform duration-200 -rotate-90 "
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        </button>
    </section>
  );
}

export default RatingsAndReviews;
