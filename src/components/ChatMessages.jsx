const ChatMessages = ({ messages, activePage }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-green-50 p-4 h-full space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col">
          {message.date && (
            <p className="text-center text-xs sm:text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full mx-auto w-max mb-2">
              {message.date}
            </p>
          )}
          <div
            className={`p-4 max-w-[80%] sm:max-w-md ${
              activePage === "IspProfilePage" ||
              activePage === "IspProfilePageEdit" ||
              activePage === "BspProfilePage"
                ? message.sender === "user"
                  ? "bg-gray-200 text-black self-start rounded-lg rounded-br-none"
                  : "bg-black text-white self-end rounded-lg rounded-bl-none"
                : message.sender === "user"
                ? "bg-gray-800 text-white self-start rounded-lg rounded-br-none"
                : "bg-white text-black self-end rounded-lg rounded-bl-none"
            } shadow-md text-sm sm:text-base transition duration-300`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
