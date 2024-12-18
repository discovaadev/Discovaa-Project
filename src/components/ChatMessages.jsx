const ChatMessages = ({ messages, activePage }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-green-50 p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col">
          {message.date && (
            <p className="text-center text-xl text-gray-500 bg-gray-300 p-1 mx-auto mb-5 w-56 rounded-full">
              {message.date}
            </p>
          )}
          <div
          
            className={`p-3 rounded-lg max-w-sm ${
              console.log("Active Page:", activePage, "Message Sender:", message.sender),

              activePage === "IspProfilePage" ||
              activePage === "IspProfilePageEdit" ||
              activePage === "BspProfilePage"
                ? message.sender === "user"
                  ? "bg-gray-200 text-black self-start font-light text-xl shadow-md"
                  : "bg-black text-white self-end font-light text-xl shadow-md"
                : message.sender === "user"
                ? "bg-gray-800 text-white self-start font-light text-xl shadow-md"
                : "bg-white text-black self-end font-light text-xl shadow-md"
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
