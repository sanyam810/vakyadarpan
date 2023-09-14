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

      <div className="p-5 sm:w-97 w-full max-w-md pl-4 flex flex-col justify-start items-start blue-glassmorphism">
        <div className="mb-4">
          <label className="text-lg font-bold text-white mb-2" htmlFor="title">Title</label>
          <Input placeholder="Video Title" name="title" type="text" handleChange={() => {}} />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold text-white mb-2" htmlFor="script">Script</label>
          <Input placeholder="Enter the press release" name="title" type="text" handleChange={() => {}} />
        </div>

        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Revolutinizing Engaging with video transitions</h2>
        <p className="text-gray-600">elevate engagement through automated text-to-image video generation with vakyadarpan</p>
      </div>

    </div>
  );
}

export default Services;
