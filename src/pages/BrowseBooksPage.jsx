import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books.items);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let currentBooks = allBooks;

    // 1. Filter by category if present in URL
    if (category) {
      currentBooks = allBooks.filter(
        (book) => book.category && book.category.toLowerCase() === category.toLowerCase()
      );
    }

    // 2. Filter by search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      currentBooks = currentBooks.filter(
        (book) =>
          (book.title && book.title.toLowerCase().includes(lowerCaseQuery)) ||
          (book.author && book.author.toLowerCase().includes(lowerCaseQuery))
      );
    }
    setFilteredBooks(currentBooks);
  }, [allBooks, category, searchQuery]);

  if (status === 'loading') {
    return <div className="text-center py-8 text-lg text-gray-600">Loading books...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-8 text-lg text-red-600">Error: {error || 'Failed to fetch books'}</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Browse Books {category ? ` - ${category}` : ''}
      </h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No books found for this {category ? 'category and/or ' : ''}search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooksPage;