interface ChatDiscussionMessageProps {
  text: string;
}

const ChatDiscussionMessage = ({ text }: ChatDiscussionMessageProps) => {
  return <div>{text}</div>;
};

export default ChatDiscussionMessage;
