const ChatHeader = ({ onClose, headerName }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-4 rounded-t-xl">
      <div>
        <h2 className="text-2xl font-bold">{headerName}</h2>
        <p className="text-sm font-light"> 4 years in business • 10 hires on Discovaa</p>
      </div>
      <button
        className="text-2xl w-10 h-10 bg-transparent text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default ChatHeader;

