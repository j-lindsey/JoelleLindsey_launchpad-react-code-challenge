import { configureStore } from '@reduxjs/toolkit';
import homePostsReducer from '../features/homePosts/homePostsSlice';

export const store = configureStore({
  reducer: {
    posts: homePostsReducer,
  },
});
