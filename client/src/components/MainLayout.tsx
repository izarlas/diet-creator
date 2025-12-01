import ChatContainer from './chat/ChatContainer';

const MainLayout = () => {
  return (
    <div className="flex-1 mt-10 mb-10 p-3 border-2 border-gray-700 bg-gray-800 rounded-xl">
      <ChatContainer />
    </div>
  );
};

export default MainLayout;
