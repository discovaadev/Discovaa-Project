import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      onSend(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center bg-white p-4 border-t border-gray-200 shadow-lg">
      <button className="bg-black p-2 rounded-full w-10 h-10 text-white hover:bg-teal-600 mr-2">
        +
      </button>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type a message..."
        rows="2" 
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base resize-none" 
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="bg-black p-3 rounded-full text-white hover:bg-teal-600 ml-2"
      >
        ➤
      </button>
    </div>
  );
};

export default MessageInput;
