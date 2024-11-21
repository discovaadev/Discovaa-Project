import { Link } from "react-router-dom";

function SeeMoreButton({ onClick }) {
  return (
    <Link to="/userseemorepage">
      <button
        onClick={onClick}
        className="flex items-center text-black transition-colors duration-200 border-2 py-3 px-2 font-normal rounded-md"
      >
        <span>See More</span>
        <svg
          className="ml-1 w-4 h-4 transform transition-transform duration-200 -rotate-90"
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
    </Link>
  );
}

export default SeeMoreButton;
