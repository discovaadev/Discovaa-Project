import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      onSend(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex items-center bg-white p-4 border-t border-gray-200">
      <button className="bg-black p-3 rounded-full text-white hover:bg-gray-800 mr-2">
        +
      </button>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="bg-black p-3 rounded-full text-white hover:bg-gray-800 ml-2"
      >
        ➤
      </button>
    </div>
  );
};

export default MessageInput;
