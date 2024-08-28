import { createSlice } from "@reduxjs/toolkit";

interface boldState {
    value: boolean
}

const initialState: boldState = {
    value: false,
}

export const boldSlice = createSlice({
    name: "bold",
    initialState,
    reducers: {
        toggleBold: (state) => {state.value = !state.value},
    },
});

export const { toggleBold } = boldSlice.actions
export default boldSlice.reducer