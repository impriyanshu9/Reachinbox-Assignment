import { createSlice } from "@reduxjs/toolkit";

interface isOpenState {
    value: boolean
}

const initialState: isOpenState = {
    value: false,
}
export const isOpenSlice = createSlice({
    name: "isOpen",
    initialState,
    reducers: {
        toggleIsOpen: (state) => {state.value = !state.value},
    },
});

export const { toggleIsOpen } = isOpenSlice.actions
export default isOpenSlice.reducer