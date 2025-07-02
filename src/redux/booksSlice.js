import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define and export the async thunk for fetching books
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://books-backend-0qxz.onrender.com/api/getAllBooks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Adjust according to your API response structure
      return data.Books || data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, _id: `temp-${Date.now()}` };
      state.items.push(newBook);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;