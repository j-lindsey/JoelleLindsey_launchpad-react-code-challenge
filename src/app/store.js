import { configureStore } from '@reduxjs/toolkit';
import homePostsReducer from '../features/homePosts/homePostsSlice';
import universityReducer from '../features/universityInfo/universitySlice';
import postalReducer from '../features/postalinfo/postalInfoSlice';

export const store = configureStore({
  reducer: {
    posts: homePostsReducer,
    universities: universityReducer,
    postal: postalReducer
  },
});

