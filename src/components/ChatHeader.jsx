const ChatHeader = ({ onClose, headerName }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md text-black px-4 py-4 rounded-t-xl ">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold">{headerName}</h2>
        <p className="text-sm sm:text-base text-gray-500">
          4 years in business • 10 hires on Discovaa
        </p>
      </div>
      <button
        className="text-lg w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default ChatHeader;
