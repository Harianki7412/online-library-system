# Online Library System (with Tailwind CSS)

This is a React-based web application for an online library system, styled entirely with **Tailwind CSS**. It allows users to browse books by category, search for books, view detailed information about individual books, and add new books to the library (client-side only).

## Features

* **Home Page:**
    * Welcome message.
    * List of book categories for easy navigation.
    * Display of popular books with links to their details.
    * Persistent navigation bar with links to Home, Browse Books, and Add Book.
* **Browse Books Page:**
    * Displays a list of books.
    * Supports filtering books by category using dynamic routing (e.g., `/books/Fiction`).
    * Search functionality to filter books by title or author.
    * "View Details" link for each book.
* **Book Details Page:**
    * Dynamic route to display detailed information for a selected book (title, author, description, rating).
    * "Back to Browse" button to return to the book list.
* **Add Book Page:**
    * A form to add new books to the library.
    * Uses Redux for managing the global state of the book list.
    * Implements client-side form validation for all fields.
    * Redirects the user to the Browse Books page after successful submission, displaying the newly added book.
    * **Important Note:** Due to the provided API only supporting `GET /getAllBooks`, newly added books are only managed in the client-side Redux store and are **not persisted** to a backend database. They will disappear on page refresh.
* **404 Page:**
    * Custom "Page Not Found" page for undefined routes.
    * Includes a link back to the Home page.

## Technologies Used

* **React:** Frontend JavaScript library.
* **React Router DOM:** For declarative routing.
* **Redux Toolkit:** For efficient and predictable state management.
* **Tailwind CSS:** A utility-first CSS framework for styling.
* **Axios:** For making HTTP requests to the book API.

## API

Book data is fetched from: `https://books-backend-0qxz.onrender.com/api/getAllBooks`

## How to Run the Application

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_LINK_HERE]
    cd online-library-system-tailwind
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or if you use yarn:
    # yarn install
    ```

3.  **Start the Development Server:**
    ```bash
    npm start
    # or if you use yarn:
    # yarn start
    ```

    This will open the application in your browser at `http://localhost:3000`.

## Project Structure

online-library-system/
├── public/
├── src/
│   ├── components/       // Reusable UI components (Navbar, BookCard)
│   ├── pages/            // Top-level page components (Home, Browse, Details, Add, 404)
│   ├── redux/            // Redux store and slices
│   │   ├── store.js
│   │   └── bookSlice.js
│   ├── App.js            // Main application setup and routing
│   ├── index.js          // React DOM render and Redux Provider
│   ├── index.css         // Contains Tailwind directives
│   └── ...
├── package.json
├── tailwind.config.js    // Tailwind CSS configuration
├── postcss.config.js     // PostCSS configuration for Tailwind
├── README.md