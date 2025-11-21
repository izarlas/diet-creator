import { useState } from "react";

const ChatBody = () => {
  const [textAreaText, setTextAreaText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    if (!textAreaText.trim()) return;

    event.preventDefault();

    console.log("Submitted!!!");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <textarea
      className="
          h-40
          border-2
          border-gray-700
          bg-gray-800
          rounded-lg
          resize-none
          w-full
          focus:outline-none
          focus:ring-0
        focus:border-gray-700
          p-2
        "
      value={textAreaText}
      onChange={(event) => setTextAreaText(event.target.value)}
      placeholder="Start your diet journey here..."
      onKeyDown={handleKeyDown}
    />
  );
};

export default ChatBody;
