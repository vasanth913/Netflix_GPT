import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'Gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        loading: false
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !(state.showGptSearch);
        },
        loading: (state, action) => {
            state.loading = true;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.loading = false;
        }
    }
});


export const {toggleGptSearchView, addGptMovieResult, loading} = gptSlice.actions;

export default gptSlice.reducer;
