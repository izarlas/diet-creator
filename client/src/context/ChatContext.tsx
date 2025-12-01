import { createContext, useContext, useState } from 'react';
import type { MessageType } from '../types/MessageType';

type ChatContextType = {
  messages: MessageType[];
  addMessage: (message: MessageType) => void;
  clearMessages: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const addMessage = (message: MessageType) => {
    setMessages((existingMessages) => [...existingMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error('useChat must be used inside <ChatProvider>');
  }
  return ctx;
};
