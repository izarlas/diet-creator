import "./App.css";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-gray-900 text-gray-300 h-screen pl-80 pr-80">
      <Navbar />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
