import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-10 bg-gray-800">
      <Link to="/">
        <h1 className="text-2xl text-white font-bold">Teste</h1>
      </Link>

      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <div className="absolute -top-2 left-5 bg-yellow-600 h-4 w-4 rounded-full" />
      </div>
    </div>
  );
}
