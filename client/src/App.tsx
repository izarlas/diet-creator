import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Modal from './components/modal/Modal';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setModalState] = useState<boolean>(false);

  const handleModalState = () => {
    setModalState(!isOpen);
  };

  return (
    <div className="flex flex-col bg-gray-900 text-gray-300 h-screen pl-80 pr-80">
      <Navbar toggleModal={handleModalState} />
      <MainLayout />
      {isOpen && <Modal toggleModal={handleModalState} />}
      <Footer />
    </div>
  );
}

export default App;
