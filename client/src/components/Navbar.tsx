import UserIcon from './icons/UserIcon';

interface NavBarProps {
  toggleModal: () => void;
}

const Navbar = ({ toggleModal }: NavBarProps) => {
  return (
    <div className="flex w-full border-2 border-gray-700 bg-gray-800 h-12 items-center rounded-b-sm p-4">
      <div className="flex-1 cursor-pointer">Home</div>
      <div className="flex-1 cursor-pointer">Create your diet</div>
      <div className="flex flex-1 cursor-pointer justify-end">
        <div onClick={toggleModal}>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
