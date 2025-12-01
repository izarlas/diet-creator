import { useChat } from '../../context/ChatContext';
import type { MessageType } from '../../types/MessageType';
import ChatDiscussionHeader from './ChatDiscussionHeader';
import ChatDiscussionMessage from './ChatDiscussionMessage';

const ChatDiscussion = () => {
  const { messages } = useChat();

  const renderChat = messages.map((message: MessageType, index: number) => {
    return (
      <div
        className="border p-3 rounded-lg mb-2 border-gray-700 bg-gray-900"
        key={index}
      >
        {message?.type && <ChatDiscussionHeader title={message.type} />}
        {message?.message && <ChatDiscussionMessage text={message.message} />}
      </div>
    );
  });

  return (
    <div
      className="
        flex-1
        border-2
        border-gray-700
        bg-gray-800
        rounded-lg
        w-full
        p-2
        mb-4
      "
    >
      {renderChat}
    </div>
  );
};

export default ChatDiscussion;
