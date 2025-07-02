import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  if (!book) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between text-left transform transition-transform hover:scale-105 h-full">
      <div className="flex justify-center items-center mb-4 h-48 bg-gray-100 rounded">
        <img
          src={book.coverImage}
          alt={book.title}
          className="object-contain h-full max-h-44 w-auto"
          onError={e => { e.target.src = 'https://via.placeholder.com/120x180?text=No+Image'; }}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{book.title}</h3>
      <p className="text-gray-600 mb-1">
        <strong className="font-medium">Author:</strong> {book.author}
      </p>
      <p className="text-gray-600 mb-1">
        <strong className="font-medium">Category:</strong> {book.category || 'N/A'}
      </p>
      <p className="text-gray-600 mb-3">
        <strong className="font-medium">Rating:</strong> {book.ratings || 'N/A'} / 5
      </p>
      <Link
        to={`/books/details/${book._id}`}
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;