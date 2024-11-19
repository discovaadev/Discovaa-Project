import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingModal from "./LoadingModal";
import BookingConfirmedModal from "../components/BookingConfirmedModal";

const BookingInterface = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const availableDates = [
    { day: "MON", date: "2nd Feb", available: "available" },
    { day: "TUE", date: "3rd Feb", available: "available" },
    { day: "WED", date: "4th Feb", available: "available" },
    { day: "THU", date: "5th Feb", available: "available" },
  ];

  const timeSlots = [
    "8:00AM",
    "8:30AM",
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white text-2xl rounded-full bg-black w-8 h-8"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-2">Select date and time</h2>
        <p className="text-sm text-gray-500 mb-8">
          In your local time zone (Europe, Estonia)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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

          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Available dates</h3>
              <p className="text-xs text-gray-500 mb-3">
                Plum Plumbing Services’ available date slots...
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    className={`border rounded-lg px-4 py-2 text-sm font-medium ${
                      selectedDate.toDateString() ===
                      new Date(date.date).toDateString()
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedDate(new Date(date.date))}
                  >
                    <div>{date.day}</div>
                    <div>{date.date}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Available time slots
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Plum Plumbing Services’ available time slots...
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className={`border px-4 py-2 rounded-lg text-sm font-medium ${
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
              <div className="flex flex-col  gap-4">
                <button
                  className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 flex-grow"
                  onClick={handleConfirmOrder}
                >
                  Confirm Booking
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-200 text-gray-700 py-3 px-6 rounded hover:bg-gray-300 flex-grow"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <LoadingModal isVisible={isLoading} />
        {isConfirmed && <BookingConfirmedModal onClose={handleClose} />}
      </div>
    </div>
  );
};

export default BookingInterface;
