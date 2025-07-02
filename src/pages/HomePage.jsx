import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const books = useSelector((state) => state.books.items);
  const status = useSelector((state) => state.books.status);
  
    const categories = Array.from(
    new Set(
      books
        .map((book) => book.category)
        .filter((cat) => cat && cat.trim() !== '')
    )
  );

  // Simple logic for popular books: pick the first 6 books if available
  const popularBooks = status === 'succeeded' ? books.slice(0, 6) : [];

  return (
    <div className="text-center py-8">
      {/* Welcome Section */}
      <section className="bg-blue-100 text-blue-800 p-8 rounded-lg mb-12 shadow-md">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Online Library!</h1>
        <p className="text-xl">Discover a vast collection of books across various genres.</p>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg transform hover:-translate-y-1"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Popular Books</h2>
        {status === 'loading' && <p className="text-gray-600 text-lg">Loading popular books...</p>}
        {status === 'failed' && <p className="text-red-600 text-lg">Error loading popular books.</p>}
        {status === 'succeeded' && popularBooks.length === 0 && <p className="text-gray-600 text-lg">No popular books found.</p>}
        {status === 'succeeded' && popularBooks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {popularBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;