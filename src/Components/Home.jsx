import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to our website!
        </h1>
        <p className="text-gray-600 mb-8">
          This is a basic home page created with Tailwind CSS.
        </p>
        <Link
          to="/user"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
