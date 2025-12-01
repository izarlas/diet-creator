import ChatBody from './ChatBody';
import ChatDiscussion from './ChatDiscussion';
import { ChatProvider } from '../../context/ChatContext';

const ChatContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatProvider>
        <ChatDiscussion />
        <ChatBody />
      </ChatProvider>
    </div>
  );
};

export default ChatContainer;
