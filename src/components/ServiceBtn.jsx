import { useState } from "react";

function ServiceButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState({
    Plumbing: false,
    "Water Heater": false,
    Pipes: false,
    Handyman: false,
  });

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  return (
    <div className="w-[1200px] h-12 bg-gray-200 rounded-md flex items-center justify-between px-4 cursor-pointer relative border-2 border-gray-300">
      <div className="flex items-center">
        <span className="text-gray-500 text-lg">Plumbing</span>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-white focus:outline-none"
        >
          <svg
            className={`ml-1 w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            } text-black`}
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
          <ul className="absolute right-0 top-12 w-56 bg-white shadow-lg rounded-md py-2 z-10">
            {Object.keys(selectedServices).map((service) => (
              <li
                key={service}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  checked={selectedServices[service]}
                  onChange={() => handleCheckboxChange(service)}
                />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceButton;
