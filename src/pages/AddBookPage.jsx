import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice.js';

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    coverImage: '', // <-- Add coverImage field
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Fiction', 'Non-Fiction', 'Sci-Fi', 'Thriller',
    'Fantasy', 'Biography', 'History', 'Mystery'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.author.trim()) newErrors.author = 'Author is required.';
    if (!formData.category) newErrors.category = 'Category is required.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    if (!formData.rating) {
      newErrors.rating = 'Rating is required.';
    } else if (isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5.';
    }
    // Optional: validate image URL (basic check)
   {formData.coverImage && !errors.coverImage && (
  <div className="mt-4 flex justify-center">
    <img
      src={formData.coverImage}
      alt="Book Cover Preview"
      className="max-h-48 rounded shadow"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </div>
)}
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook(formData));
      alert('Book added successfully (client-side)!');
      navigate('/books');
    } else {
      alert('Please correct the form errors.');
    }
  };

  return (
    <div className="py-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
        {/* Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>}
        </div>

        {/* Author */}
        <div className="mb-6">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.author ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.author && <p className="text-red-500 text-xs italic mt-1">{errors.author}</p>}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs italic mt-1">{errors.category}</p>}
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs italic mt-1">{errors.description}</p>}
        </div>

        {/* Cover Image */}
         <div className="mb-6">
          <label htmlFor="coverImage" className="block text-gray-700 text-sm font-bold mb-2">Cover Image URL:</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="https://image@URL.com"
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.coverImage ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.coverImage && <p className="text-red-500 text-xs italic mt-1">{errors.coverImage}</p>}
          {/* Image preview */}
          {formData.coverImage && !errors.coverImage && (
            <div className="mt-4 flex justify-center">
              <img
                src={formData.coverImage}
                alt="Book Cover Preview"
                className="max-h-48 rounded shadow"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="mb-8">
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating (1-5):</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="1"
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.rating ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.rating && <p className="text-red-500 text-xs italic mt-1">{errors.rating}</p>}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookPage;