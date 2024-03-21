import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCharacter = createAsyncThunk(
    'character/fetchCharacter',
    async function(id) {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const responce = await axios.get(url);
        const data = responce.data;
        return data;
    }
);

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        data: {
            origin: {},
            location: {}
        },
        loading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacter.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchCharacter.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCharacter.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default characterSlice.reducer;