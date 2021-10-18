import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    zipCode: {}
};

export const fetchZipCode = createAsyncThunk(
    'postal/getZipCode',
    async (zipCode, thunkAPI) => {
        const res = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
            .then(data => data.json())
        return res;
    });


export const postalSlice = createSlice({
    name: 'postal',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        clearZipCode: (state) => {
            state.zipCode = {};
        }
    },
    extraReducers: {
        [fetchZipCode.pending]: (state) => {
            state.loading = true;
        },
        [fetchZipCode.rejected]: (state) => {
            state.loading = false;
        },
        [fetchZipCode.fulfilled]: (state, { payload }) => {
            state.loading = false;
            console.log(payload);
            state.zipCode = payload;
        }
    }
});

export const { clearZipCode } = postalSlice.actions;
export const getZipCodeData = (state) => state.postal.zipCode;

export default postalSlice.reducer;
