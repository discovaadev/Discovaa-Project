const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col">
          {message.date && (
            <p className="text-center text-xl text-gray-500  bg-gray-300 p-1 mx-auto mb-5  w-56 rounded-full">
              {message.date}
            </p>
          )}
          <div
            className={`p-3 rounded-lg max-w-sm ${
              message.sender === "user"
                ? "bg-gray-800 text-white self-end font-light text-xl shadow-md"
                : "bg-white text-black self-start font-light text-xl shadow-md"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
