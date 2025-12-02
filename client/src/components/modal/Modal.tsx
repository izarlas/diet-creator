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
    <div className="flex justify-center items-center absolute w-auto top-0 bottom-0 right-0 left-0 bg-gray-800/50">
      <div className="flex flex-col items-center p-4 border rounded-lg w-4xl h-1/2 bg-sky-900/30 border-sky-700/50">
        <div
          className="flex justify-end w-full cursor-pointer"
          onClick={toggleModal}
        >
          <XIcon />
        </div>
        <div className="text-center">
          {isRegistered && (
            <div>
              <SignIn />
              <span
                className="text-sm hover:text-red-500 cursor-pointer hover:underline"
                onClick={() => setRegisteredState(!isRegistered)}
              >
                Not registered? Click to create your account
              </span>
            </div>
          )}
          {!isRegistered && <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
