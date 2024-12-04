import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import MessageInput from "../components/MessageInput";

const ChatPage = ({ messages, onSend, onClose, activePage, headerName }) => {
  return (
    <div className="">
      <div className="fixed w-[700px] h-[500px] bg-white shadow-lg border rounded-xl ">
        <div
          className="fixed top-[400px] left-3/4 transform -translate-x-1/2 -translate-y-1/2 
      w-[500px] h-[640px] bg-white rounded-lg shadow-lg flex flex-col "
        >
          <ChatHeader onClose={onClose} activePage={activePage} headerName={headerName} />
          <ChatMessages messages={messages} activePage={activePage} />
          <MessageInput onSend={onSend} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
