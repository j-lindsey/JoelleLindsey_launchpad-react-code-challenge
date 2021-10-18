import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const corsProxy = "https://pure-fortress-21213.herokuapp.com/";
const initialState = {
    loading: false,
    error: '',
    countries: [],
    universities: [],
    selectedCountry: "Canada",
};

export const fetchCountries = createAsyncThunk(
    'university/getCountries',
    async (thunkAPI) => {
        const res = await fetch(`https://api.first.org/data/v1/countries`,
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

    export const fetchUniversities = createAsyncThunk(
        'university/getUniversities',
        async (country, thunkAPI) => {
            const res = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
                .then(data => data.json())
            return res;
        });


export const universitySlice = createSlice({
    name: 'university',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        selectCountry: (state, {payload}) => {
            state.selectedCountry = payload;
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
        },
        [fetchUniversities.pending]: (state) => {
            state.loading = true;
        },
        [fetchUniversities.rejected]: (state) => {
            state.loading = false;
        },
        [fetchUniversities.fulfilled]: (state, { payload }) => {
            state.loading = false;
            console.log(payload);
            state.universities = payload;
        }
    }
});

export const { selectCountry, } = universitySlice.actions;
export const getCountries = (state) => state.universities.countries;
export const getselectedCountry = (state) => state.universities.selectedCountry;
export const getUniversities = (state) => state.universities.universities;

export default universitySlice.reducer;
