import React from 'react';

const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <div>
        <h1 className='text-6xl font-bold text-white font-futura'>Vakyadarpan 1.0</h1>
      </div>
      <div>
        <p className='text-3xl text-gray-400 font-futura'>Press to impress: Transform Words into Dynamic Visuals</p>
      </div>
      <div>
        <button className='bg-white text-black rounded-lg px-6 py-3 font-bold'>Get Started</button>
      </div>
    </div>
  );
};

export default Welcome;
