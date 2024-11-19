
const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg text-center w-72">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
        <p className="text-lg font-bold mt-5">Just a second...</p>
        <p className="text-sm text-gray-600 mt-2">Your booking is being confirmed.</p>
      </div>
    </div>
  );
};

export default LoadingModal;
