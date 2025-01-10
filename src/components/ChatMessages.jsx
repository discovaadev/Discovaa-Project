const ChatMessages = ({ messages, activePage }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-green-50 p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col">
          {message.date && (
            <p className="text-center text-xs sm:text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full mx-auto w-max">
              {message.date}
            </p>
          )}
          <div
            className={`p-3 rounded-lg max-w-[80%] sm:max-w-md ${
              activePage === "IspProfilePage" ||
              activePage === "IspProfilePageEdit" ||
              activePage === "BspProfilePage"
                ? message.sender === "user"
                  ? "bg-gray-200 text-black self-start"
                  : "bg-black text-white self-end"
                : message.sender === "user"
                ? "bg-gray-800 text-white self-start"
                : "bg-white text-black self-end"
            } shadow-md text-sm sm:text-base`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
