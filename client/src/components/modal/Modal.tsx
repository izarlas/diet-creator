import { useState } from 'react';
import XIcon from '../icons/XIcon';
import SignIn from '../registration/SignIn';
import SignUp from '../registration/SignUp';

interface ModalProps {
  toggleModal: () => void;
}

const Modal = ({ toggleModal }: ModalProps) => {
  const [isRegistered, setRegisteredState] = useState<boolean>(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex flex-col items-center p-4 border rounded-lg w-4xl h-2/5 bg-gray-900/50 border-gray-700/70">
        <div
          className="flex justify-end w-full cursor-pointer"
          onClick={toggleModal}
        >
          <XIcon />
        </div>
        <div className="flex justify-center w-1/2 h-full items-center">
          {isRegistered && (
            <div className="flex flex-col w-2/3">
              <SignIn />
              <div
                className="flex justify-center pt-6 text-sm hover:text-red-500 cursor-pointer hover:underline"
                onClick={() => setRegisteredState(!isRegistered)}
              >
                Not registered? Click to create your account
              </div>
            </div>
          )}
          {!isRegistered && (
            <div className="flex flex-col w-2/3">
              <SignUp />
              <div
                className="flex justify-center pt-6 text-sm hover:text-red-500 cursor-pointer hover:underline"
                onClick={() => setRegisteredState(!isRegistered)}
              >
                Already registered? Click to sign in your account
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
