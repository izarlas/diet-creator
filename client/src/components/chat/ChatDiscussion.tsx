import { useChat } from '../../context/ChatContext';
import type { MessageType } from '../../types/MessageType';
import ChatContainerHeader from './ChatContainerHeader';
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
    // TODO - Ensure the discussion containers max size fits the screen and does not push the chat input
    <div className="flex flex-col border-0 h-full mb-2">
      <ChatContainerHeader />
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
