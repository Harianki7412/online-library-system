import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.items);
  const status = useSelector((state) => state.books.status);

  const book = books.find((b) => b._id === id);

  if (status === 'loading') {
    return <div className="text-center py-8 text-lg text-gray-600">Loading book details...</div>;
  }

  if (!book) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl text-red-600 font-semibold mb-4">Book not found!</p>
        <button
          onClick={() => navigate('/books')}
          className="bg-gray-600 text-white py-2 px-5 rounded-md hover:bg-gray-700 transition-colors duration-200"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/books')}
        className="bg-gray-600 text-white py-2 px-5 rounded-md hover:bg-gray-700 transition-colors duration-200 mb-6"
      >
        Back to Browse
      </button>

      <div className="bg-white rounded-lg shadow-xl p-8 text-left flex flex-col md:flex-row gap-8">
        {/* Book Cover */}
        <div className="flex-shrink-0 flex justify-center items-start md:items-center mb-6 md:mb-0">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-80 h-100 object-cover rounded shadow border"
            onError={e => { e.target.src = 'https://via.placeholder.com/160x240?text=No+Image'; }}
          />
        </div>
        {/* Book Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{book.title}</h1>
          <h2 className="text-2xl text-gray-700 mb-5">By {book.author}</h2>
          <p className="text-lg text-gray-600 mb-3">
            <strong className="font-semibold">Category:</strong> {book.category || 'N/A'}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong className="font-semibold">Rating:</strong> {book.ratings || 'N/A'} / 5
          </p>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Description:</h3>
            <p className="text-gray-700 leading-relaxed">
              {book.description || 'No description available for this book.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;