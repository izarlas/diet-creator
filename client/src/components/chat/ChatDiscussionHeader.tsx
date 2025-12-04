import { firstCharacterToUpperCase } from '../../utils/text-transformation';

interface ChatDiscussionHeaderProps {
  title: string;
}

const ChatDiscussionHeader = ({ title }: ChatDiscussionHeaderProps) => {
  return (
    <div>
      {firstCharacterToUpperCase(title)}
      <hr />
    </div>
  );
};

export default ChatDiscussionHeader;
