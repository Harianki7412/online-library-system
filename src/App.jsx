import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './redux/booksSlice.js';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;