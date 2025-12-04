interface QuestionMarkIconProps {
  text: string;
}

const QuestionMarkIcon = ({ text }: QuestionMarkIconProps) => {
  return (
    <div className="relative flex items-center group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4 cursor-pointer hover:text-blue-400/90"
      >
        <path
          fillRule="evenodd"
          d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
          clipRule="evenodd"
        />
      </svg>

      <span className="absolute bottom-full mb-2 hidden w-max max-w-xs rounded bg-gray-700 text-white text-xs px-2 py-1 text-center group-hover:block">
        {text}
      </span>
    </div>
  );
};

export default QuestionMarkIcon;
