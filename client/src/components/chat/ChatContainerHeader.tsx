import { useChat } from '../../context/ChatContext';
import BookmarkIcon from '../icons/BookmarkIcon';
import TrashIcon from '../icons/TrashIcon';

const ChatContainerHeader = () => {
  const { messages, clearMessages } = useChat();

  return (
    <div className="text-xl pb-2 pl-2 pr-2 flex-0">
      {messages.length === 0 ? (
        <span>Start your diet journey here</span>
      ) : (
        <div className="flex cursor-pointer justify-end">
          {/* Todo replace onclick with DB save through api */}
          <BookmarkIcon onClick={() => null} />
          <TrashIcon onClick={clearMessages} />
        </div>
      )}
    </div>
  );
};

export default ChatContainerHeader;
