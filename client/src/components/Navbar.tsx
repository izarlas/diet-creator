const Navbar = () => {
  return (
    <div className="flex w-full border-2 border-gray-700 bg-gray-800 h-12 items-center rounded-sm">
      <div className="flex-1 cursor-pointer">Home</div>
      <div className="flex-1 cursor-pointer">Create your diet</div>
      <div className="flex-1 cursor-pointer"> Login</div>
    </div>
  );
};

export default Navbar;
