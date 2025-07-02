import { useEffect, useState } from 'react';

function ApiCalling() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function callingApi() {
            fetch('https://books-backend-0qxz.onrender.com/api/getAllBooks')
                .then(res => res.json())
                .then(data => {
                setBooks(data.Books);
            });
        }
        callingApi();
    }, []);
    return books;
}
export default ApiCalling;