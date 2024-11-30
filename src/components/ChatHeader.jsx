const ChatHeader = ({onClose, headerName}) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg text-black px-4 py-6 rounded-t-lg">
      <div>
        <h2 className="text-3xl font-bold mb-3">{headerName}</h2>
        <p className="text-xl text-gray-500">
          4 years in business • 10 hires on Discovaa
        </p>
      </div>
      <button className="text-xl w-8 h-8 bg-black  text-white rounded-full"  onClick={onClose}>
          &times;
        </button>
    </div>
  );
};

export default ChatHeader;
