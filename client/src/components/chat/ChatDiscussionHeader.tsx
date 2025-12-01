interface ChatDiscussionHeaderProps {
  title: string;
}

const ChatDiscussionHeader = ({ title }: ChatDiscussionHeaderProps) => {
  return <div>{title}</div>;
};

export default ChatDiscussionHeader;
