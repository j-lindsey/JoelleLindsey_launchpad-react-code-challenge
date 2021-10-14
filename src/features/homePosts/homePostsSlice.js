import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    posts: [],
};

export const fetchPosts = createAsyncThunk(
    'homePosts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
            .then(data => data.json())
        console.log(res);
        return res;
    });

export const homePostsSlice = createSlice({
    name: 'homePosts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // addPosts: (state, { payload }) => {
        //     state.posts = payload;
        //},
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
        },
        [fetchPosts.rejected]: (state) => {
            state.loading = false;
        },
        [fetchPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        }
    }
});

//
export const getAllPosts = (state) => state.posts.posts;

export default homePostsSlice.reducer;
