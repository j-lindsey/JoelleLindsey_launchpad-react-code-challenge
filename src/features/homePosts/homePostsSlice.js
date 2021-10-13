import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: '',
    error: '',
    posts: [],
};

export const GetPosts = createAsyncThunk(
    'posts/getPosts',
    () => {
        return fetch('https://jsonplaceholder.typicode.com/posts?_start=0&limit=20')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(json => json);
    });

export const homePostsSlice = createSlice({
    name: 'homePosts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addPosts: (state, { payload }) => {
            state.posts = payload;
        }
    }
});

export const { addPosts } = homePostsSlice.actions;
export const getAllPosts = (state)=> state.posts.posts;

export default homePostsSlice.reducer;
