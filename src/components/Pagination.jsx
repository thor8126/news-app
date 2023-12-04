// src/components/Pagination.js
import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex list-none">
        {pageNumbers.map((number) => (
          <li key={number} className="mr-2">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              } rounded cursor-pointer focus:outline-none`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
