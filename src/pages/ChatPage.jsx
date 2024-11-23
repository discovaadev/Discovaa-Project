import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import MessageInput from "../components/MessageInput";

const ChatPage = ({ messages, onSend, onClose }) => {
  return (
    <div className="">
      <div className=" w-[700px] h-[500px] bg-white shadow-lg border rounded-xl  relative">
        <div
          className="fixed top-[400px] left-3/4 transform -translate-x-1/2 -translate-y-1/2 
      w-[700px] h-[640px] bg-white rounded-lg shadow-lg flex flex-col "
        >
          <ChatHeader onClose={onClose} />
          <ChatMessages messages={messages} />
          <MessageInput onSend={onSend} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
