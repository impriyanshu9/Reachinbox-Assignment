import { createSlice } from "@reduxjs/toolkit";

interface italicState {
    value: boolean
}

const initialState: italicState = {
    value: false,
}

export const italicSlice = createSlice({
    name: "itatic",
    initialState,
    reducers: {
        toggleItalic: (state) => {state.value = !state.value},
    },
});

export const { toggleItalic } = italicSlice.actions
export default italicSlice.reducer