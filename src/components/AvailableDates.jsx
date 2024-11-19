import { useState } from "react";
import { HiArrowRight } from "react-icons/hi"; // Right arrow icon from react-icons

const AvailableDates = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Available dates with respective days and months
  const availableDates = [
    { day: "Mon", date: "2nd Feb" },
    { day: "Tue", date: "3rd Feb" },
    { day: "Wed", date: "4th Feb" },
    { day: "Thu", date: "5th Feb" },
  ];

  // Handle click on a date box
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Available Dates</h3>
      <p className="text-xs mb-4">Plum Plumbing Services' available date slots...</p>

      {/* Grid for the date boxes */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {availableDates.map((date, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center border p-2 rounded-lg shadow-sm cursor-pointer w-[90px] h-[90px] ${
              selectedDate === date ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => handleDateClick(date)}
          >
            <div className="text-xs font-semibold">{date.day}</div>
            <div className="text-sm font-bold">{date.date}</div>
            <div className="text-xs text-green-500 mt-1">Available</div>
          </div>
        ))}

    
        <div className="flex justify-center items-center w-[90px] h-[90px] cursor-pointer border-none hover:bg-gray-100">
          <button className="flex items-center text-xs font-medium text-gray-600 hover:text-gray-800">
            See More
            <HiArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Display the selected date below */}
      {selectedDate && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            You have selected:{" "}
            <span className="font-semibold">{`${selectedDate.day}, ${selectedDate.date}`}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailableDates;
