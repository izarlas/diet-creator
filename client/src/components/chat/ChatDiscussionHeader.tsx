import { firstCharacterToUpperCase } from '../../utils/textTransformation';

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
