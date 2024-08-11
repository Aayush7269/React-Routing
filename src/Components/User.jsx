import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-start  flex-col gap-10">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">List of Users</h1>
        <ul className="list-none mb-8">
          <li className="py-2 border-b border-gray-200">
            <Link to="/user/John" className="text-lg font-bold">
              John Doe
            </Link>
          </li>
          <li className="py-2 border-b border-gray-200">
            <Link to="/user/Aayush" className="text-lg font-bold">
              Aayush
            </Link>
          </li>
          <li className="py-2 border-b border-gray-200">
            <Link to="/user/Bob" className="text-lg font-bold">
              Bob Smith
            </Link>
          </li>
          <hr />
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default User;
