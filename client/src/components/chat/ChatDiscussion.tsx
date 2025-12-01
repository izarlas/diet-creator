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
    <div className="flex flex-col border-0 h-full mb-2">
      <div className="text-xl pb-2 pl-2 flex-0">
        {messages.length === 0 && <span>Start your diet journey here...</span>}
      </div>
      <div
        className="
        flex-1
        border-gray-700
        bg-gray-800
        rounded-lg
        w-full
      "
      >
        {renderChat}
      </div>
    </div>
  );
};

export default ChatDiscussion;
