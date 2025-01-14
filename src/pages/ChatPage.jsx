import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import MessageInput from "../components/MessageInput";

const ChatPage = ({ messages, onSend, onClose, activePage, headerName }) => {
  return (
    <section className="fixed top-24 right-0 w-full max-w-md  rounded-xl flex flex-col p-4 ">
    <div className="">
      <ChatHeader onClose={onClose} activePage={activePage} headerName={headerName} />
      <div className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} activePage={activePage} />
      </div>
      <MessageInput onSend={onSend} />
    </div>
    </section>
  );
};

export default ChatPage;



