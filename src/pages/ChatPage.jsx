import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import MessageInput from "../components/MessageInput";

const ChatPage = ({ messages, onSend, onClose, activePage, headerName }) => {
  return (
    <div className="fixed top-16 right-0 w-full max-w-md h-[500px] bg-white shadow-lg border rounded-xl flex flex-col">
      <ChatHeader onClose={onClose} activePage={activePage} headerName={headerName} />
      <div className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} activePage={activePage} />
      </div>
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatPage;



