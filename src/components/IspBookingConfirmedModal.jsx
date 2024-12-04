import SucccessImg from "../assets/SuccessImg.png";
import DocImg from "../assets/DocImg.png";

const IspBookingConfirmedModal = ({ onClose, selectedDate, selectedTime }) => {
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-800 bg-black rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative flex justify-center">
          <img
            src={SucccessImg}
            alt="Upload Successful"
            className="w-28 mt-8"
          />
          <img
            src={DocImg}
            alt="Upload Successful"
            className="absolute right-2 left-[170px] w-12 mt-16 text-white"
          />
        </div>
        <h2 className="text-xl font-semibold text-center">
          Booking Confirmed!
        </h2>
        <p className="text-center text-gray-600 mt-2 text-xs">
          Your booking with <strong>Plum Plumbing Services</strong> has been
          confirmed. Details below:
        </p>
        <div className="mt-6">
          <p className="text-center font-medium">
            <strong>Date:</strong> {formatDate(selectedDate)}
          </p>
          <p className="text-center font-medium">
            <strong>Time:</strong> {selectedTime || "Not specified"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default IspBookingConfirmedModal;
