
const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className=" flex flex-col items-center justify-center bg-white p-8 rounded-lg text-center  w-96 h-[500px] mt-14">
        <div className="w-24 h-24 border-8 border-gray-500 border-t-black rounded-full animate-spin mx-auto"></div>
        <p className="text-lg font-bold mt-5">Just a second...</p>
        <p className="text-sm text-gray-600 mt-2">Your booking is being confirmed.</p>
      </div>
    </div>
  );
};

export default LoadingModal;
