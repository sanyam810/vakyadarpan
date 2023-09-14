import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-transparent flex justify-end p-4 gap-5">
      <button className="justify-center w-32 font-bold font-futura bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
        Login
      </button>
      <button className="blue-glassmorphism w-32 font-bold font-futura hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center justify-center">
        Signup
      </button>
    </div>
  );
};

export default Navbar;
