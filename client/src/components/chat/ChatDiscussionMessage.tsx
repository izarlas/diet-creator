import ReactMarkdown from 'react-markdown';

interface ChatDiscussionMessageProps {
  text: string;
}

const ChatDiscussionMessage = ({ text }: ChatDiscussionMessageProps) => {
  return <ReactMarkdown>{text}</ReactMarkdown>;
};

export default ChatDiscussionMessage;
