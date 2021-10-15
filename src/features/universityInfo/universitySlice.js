import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const corsProxy = "https://pure-fortress-21213.herokuapp.com/";
const initialState = {
    loading: false,
    error: '',
    countries: [],
};

export const fetchCountries = createAsyncThunk(
    'university/getCountries',
    async (thunkAPI) => {
        const res = await fetch(`https://pure-fortress-21213.herokuapp.com/api.first.org/data/v1/countries`,
            {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(data => data.json())
        console.log(res);
        return res;
    });


export const universitySlice = createSlice({
    name: 'university',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addPostButton: (state) => {
            state.addPostButtonTrigger = true;
        }
    },
    extraReducers: {
        [fetchCountries.pending]: (state) => {
            state.loading = true;
        },
        [fetchCountries.rejected]: (state) => {
            state.loading = false;
        },
        [fetchCountries.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.countries = payload.data;
        }
    }
});

export const { addPostButto, } = universitySlice.actions;
export const getCountries = (state) => state.universities.countries;

export default universitySlice.reducer;
