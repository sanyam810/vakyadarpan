import React from 'react';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Services = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen gap-20">

      <div className="p-5 sm:w-97 w-full max-w-md pl-4 flex flex-col justify-center  blue-glassmorphism">
        <div className="mb-4">
          <label className="text-lg font-bold text-white mb-2" htmlFor="title">Title</label>
          <Input placeholder="Video Title" name="title" type="text" handleChange={() => {}} />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold text-white mb-2" htmlFor="script">Script</label>
          <Input placeholder="Enter the press release" name="title" type="text" handleChange={() => {}} />
        </div>

        <div className="mt-4 flex justify-end">
          <button className="white-glassmorphism w-32 font-bold font-futura hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center justify-center">Submit</button>
        </div>
      </div>

      
      <div className="mt-4 flex flex-col gap-5">
        <div>
          <h2 className="text-4xl font-bold text-white font-futura">Revolutinizing Engaging <br></br> with video transitions</h2>
        </div>
        <div>
        <p className="text-gray-600 font-futura font-bold">Elevate engagement through automated text-to-image <br></br> video generation with vakyadarpan</p>
        </div>
      </div>

    </div>
  );
}

export default Services;
