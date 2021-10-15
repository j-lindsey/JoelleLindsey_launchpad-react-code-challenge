import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    posts: [],
    addPostButtonTrigger: false,
    editPostButtonTrigger: false,
    newPost: {
        title: '',
        body: '',
        userId: null
    },
    editPost: {
        id: null,
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

export const searchPosts = createAsyncThunk(
    'homePosts/searchPosts',
    async (id, thunkAPI) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

export const editPosts = createAsyncThunk(
    'posts/editPost',
    async ({ post, id }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: 'PUT',
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

export const deletePosts = createAsyncThunk(
    'posts/deletePost',
    async ( id , { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: 'DELETE'
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
        closeAddModal: (state) => {
            state.newPost = {
                title: '',
                body: '',
                userId: null
            };
            state.addPostButtonTrigger = false;
        },
        editPostButton: (state) => {
            state.editPostButtonTrigger = true;
        },
        editPostValue: (state, { payload }) => {
            state.editPost = payload;
        },
        editPostTitle: (state, { payload }) => {
            state.editPost.title = payload;
        },
        editPostBody: (state, { payload }) => {
            state.editPost.body = payload;
        },
        editPostUserId: (state, { payload }) => {
            state.editPost.userId = payload;
        },
        closeEditModal: (state) => {
            state.editPost = {
                id: null,
                title: '',
                body: '',
                userId: null
            };
            state.editPostButtonTrigger = false;
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
            state.newPost = {
                title: '',
                body: '',
                userId: null
            };
            state.addPostButtonTrigger = false;
            console.log("post added successfully");
        },
        [searchPosts.pending]: (state) => {
            state.loading = true;
        },
        [searchPosts.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [searchPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = [payload];
        },
        [editPosts.pending]: (state) => {
            state.loading = true;
        },
        [editPosts.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [editPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.editPost = {
                id: null,
                title: '',
                body: '',
                userId: null
            };
            state.editPostButtonTrigger = false;
            console.log("post edited successfully");
        }, 
         [deletePosts.pending]: (state) => {
            state.loading = true;
        },
        [deletePosts.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [deletePosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            console.log(payload);
        },
    }
});

export const { addPostButton, addPostTitle, addPostBody, addPostUserId, editPostButton, editPostValue, editPostBody, editPostTitle, editPostUserId, closeEditModal, closeAddModal} = homePostsSlice.actions;
export const getAllPosts = (state) => state.posts.posts;
export const getaddPostButtonTrigger = (state) => state.posts.addPostButtonTrigger;
export const geteditPostButtonTrigger = (state) => state.posts.editPostButtonTrigger;
export const getnewPost = (state) => state.posts.newPost;
export const geteditPost = (state) => state.posts.editPost;

export default homePostsSlice.reducer;

