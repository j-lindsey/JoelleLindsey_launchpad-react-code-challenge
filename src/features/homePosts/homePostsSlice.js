import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    posts: [],
    addPostButtonTrigger: false,
    newPost: {
        title: '',
        body: '',
        userId: null
    },
};

export const fetchPosts = createAsyncThunk(
    'homePosts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
            .then(data => data.json())
        return res;
    });

export const addPosts = createAsyncThunk(
    'posts/addPost',
    async (post, { rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    body: JSON.stringify(post),
                    header: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            const data = await response.json()
            return data
        } catch (err) {
            // You can choose to use the message attached to err or write a custom error
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const homePostsSlice = createSlice({
    name: 'homePosts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addPostButton: (state) => {
            state.addPostButtonTrigger = true;
        },
        addPostTitle: (state, { payload }) => {
            state.newPost.title = payload;
        },
        addPostBody: (state, { payload }) => {
            state.newPost.body = payload;
        },
        addPostUserId: (state, { payload }) => {
            state.newPost.userId = payload;
        },
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
        },
        [addPosts.pending]: (state) => {
            state.loading = true;
        },
        [addPosts.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [addPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.newPost = {};
            state.addPostButtonTrigger = false;
            console.log("post added successfully");
        }
    }
});

export const { addPostButton, addPostTitle, addPostBody, addPostUserId } = homePostsSlice.actions;
export const getAllPosts = (state) => state.posts.posts;
export const getaddPostButtonTrigger = (state) => state.posts.addPostButtonTrigger;
export const getnewPost = (state) => state.posts.newPost;

export default homePostsSlice.reducer;

