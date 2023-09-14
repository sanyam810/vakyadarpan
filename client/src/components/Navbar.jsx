import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-transparent flex justify-end p-4 gap-5">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        Login
      </button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        Signup
      </button>
    </div>
  );
};

export default Navbar;
