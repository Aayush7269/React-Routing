import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/user");
  };
  return (
    <div className=" translate-x-[50%] ">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {" "}
          Do you know {name}!
        </h1>
        <p className="text-gray-600 mb-8">
          This is a basic home page created with Tailwind CSS.
        </p>
        <button
          onClick={GoBack}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
