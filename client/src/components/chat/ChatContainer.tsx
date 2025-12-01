import ChatBody from './ChatBody';
import ChatDiscussion from './ChatDiscussion';
import { ChatProvider } from '../../context/ChatContext';

const ChatContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-xl pb-2 flex-0">Create your diet today!</div>
      <ChatProvider>
        <ChatDiscussion />
        <ChatBody />
      </ChatProvider>
    </div>
  );
};

export default ChatContainer;
