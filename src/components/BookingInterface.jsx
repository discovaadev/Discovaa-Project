import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingModal from "../pages/LoadingModal";
import BookingConfirmedModal from "../components/BookingConfirmedModal";
import AvailableDates from "./AvailableDates";

const BookingInterface = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmed(true);
    }, 3000);
  };

  const handleClose = () => {
    setIsConfirmed(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">Select date and time</h2>
        <p className="text-sm text-gray-500 mb-8">
          In your local time zone (Europe, Estonia)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-[300px]">
            <div className="border rounded-lg p-4">
              <div className="text-center text-gray-700 font-semibold mb-2">
                Choose a Date
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                calendarClassName="custom-calendar"
              />
            </div>
          </div> 
          <div >
            <div >
              <div className="flex flex-wrap ">
               <AvailableDates />
              </div>
              <h3 className="text-lg font-semibold mb-4">
                Available time slots
              </h3>
              <p className="text-xs">Plum Plumbing Services’ available time slots...</p>
              <div className="flex flex-wrap  mb-8">
                {[
                  "8:00AM",
                  "8:30AM",
                  "9:00AM",
                  "9:30AM",
                  "10:00AM",
                  "10:30AM",
                  "11:00AM",
                  "11:30AM",
                ].map((time, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded border ${
                      selectedTime === time
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col ">
              <button
                className="flex-grow bg-black text-white py-3 rounded hover:bg-gray-800 mb-3"
                onClick={handleConfirmOrder}
              >
                Confirm Booking
              </button>
              <LoadingModal isVisible={isLoading} />
              {isConfirmed && <BookingConfirmedModal onClose={handleClose} />}
              <button
                onClick={onClose}
                className="flex-grow bg-gray-200 text-gray-700 py-3 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInterface;
