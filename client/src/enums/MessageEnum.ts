export const MessageEnum = {
  QUESTION: 'question',
  ANSWER: 'answer',
} as const;

export type MessageEnum = (typeof MessageEnum)[keyof typeof MessageEnum];
