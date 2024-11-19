const BookingConfirmedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-800 bg-black rounded-full p-2 "
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

        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center">
          Booking Confirmed!
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Your booking with **Plum Plumbing Services** has been confirmed.
          Details below:
        </p>
        <div className="mt-6">
          <p className="text-center font-medium">
            <strong>Date:</strong> Monday, 2nd February, 2023
          </p>
          <p className="text-center font-medium">
            <strong>Time:</strong> 8:00 AM UTC
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmedModal;
