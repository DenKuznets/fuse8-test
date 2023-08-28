import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    value: string;
    jokesNubmer: number | null;
}

const initialState: AppState = {
    value: "",
    jokesNubmer: null,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // console.log(action);
            state.value = action.payload;
        },
        setJokesNumber: (state, action: PayloadAction<number>) => {
            state.jokesNubmer = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery, setJokesNumber } = appSlice.actions;

export default appSlice.reducer;
