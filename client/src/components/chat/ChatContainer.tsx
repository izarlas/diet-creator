import ChatBody from "./ChatBody";
import ChatResponse from "./ChatResponse";

const ChatContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-xl pb-2 flex-0">Create your diet today!</div>
      <ChatResponse />
      <ChatBody />
    </div>
  );
};

export default ChatContainer;
