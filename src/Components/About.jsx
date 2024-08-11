import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {" "}
          Get to know about our website!
        </h1>
        <p className="text-gray-600 mb-8">
          This is a basic home page created with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          More Users
        </button>
      </div>
    </div>
  );
};

export default About;
