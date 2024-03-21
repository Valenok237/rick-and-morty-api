import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async function({page, name, type, species, status, gender}) {
        let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&type=${type}&species=${species}`;
        if (status !== 'default') {
            url += `&status=${status}`;
        } else {
            url = url.replace(`&status=${status}`, '');
        }
        if (gender !== 'default') {
            url += `&gender=${gender}`;
        } else {
            url = url.replace(`&gender=${gender}`, '');
        }
        const responce = await axios.get(url);
        const data = responce.data;
        return data;
    }
);

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        data: [],
        pages: 0,
        loading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.data = action.payload.results;
            state.pages = action.payload.info.pages;
            state.loading = false;
        })
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.data = [];
            state.pages = 0;
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default charactersSlice.reducer;