import { configureStore } from '@reduxjs/toolkit';
import homePostsReducer from '../features/homePosts/homePostsSlice';
import universityReducer from '../features/universityInfo/universitySlice';

export const store = configureStore({
  reducer: {
    posts: homePostsReducer,
    universities: universityReducer
  },
});

