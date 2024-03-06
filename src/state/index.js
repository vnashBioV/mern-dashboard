import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239bf700000e",
};

export const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        // Functions that changes the global initial states
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;