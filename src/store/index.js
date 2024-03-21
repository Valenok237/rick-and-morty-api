import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import characterReducer from "./characterSlice";

export default configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer
    }
});