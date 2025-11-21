import ChatContainer from "./chat/ChatContainer";

const MainLayout = () => {
  return (
    <div className="flex-1 m-20 p-4 border-2 border-gray-700 bg-gray-800 rounded-xl">
      <ChatContainer />
    </div>
  );
};

export default MainLayout;
