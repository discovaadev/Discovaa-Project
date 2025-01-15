import { useState } from "react";

const SortDropdown = () => {
  const [selected, setSelected] = useState(null); // Initially unselected
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="text-white bg-black px-4 py-2 rounded-lg font-semibold inline-flex items-center"
      >
        Sort by: {selected || "Categories"}
        <svg
          className={`ml-1 w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          {["Categories", "Popularity", "Ratings", "Proximity"].map(
            (option) => (
              <div
                key={option}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                <div
                  className={`flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 mr-2 ${
                    selected === option ? "bg-gray-700" : ""
                  }`}
                >
                  {selected === option && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                {option}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
