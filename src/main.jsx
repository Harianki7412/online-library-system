import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import HomePage from './pages/HomePage.jsx';
import BookDetailsPage from './pages/BookDetailsPage.jsx';
import BrowseBooksPage from './pages/BrowseBooksPage.jsx';
import AddBookPage from './pages/AddBookPage.jsx'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path:"/books/details/:id",
        element:<BookDetailsPage/>
      },
      {
        path:"/books/:category?",
        element:<BrowseBooksPage/>
      },
      {
        path:"/add-book",
        element:<AddBookPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);