import React from "react";
import { Link } from "react-router";
import NotFoundImage from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>

      <div className="mb-8 max-w-md w-full">
        <img
          src={NotFoundImage}
          alt="Page Not Found"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
