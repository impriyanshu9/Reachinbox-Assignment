import { createSlice } from "@reduxjs/toolkit";

interface InboxLayoutState {
    isOpen: boolean;
}

const initialState: InboxLayoutState = {
    isOpen: false,
};

const inboxLayoutSlice = createSlice({
    name: "inboxLayout",
    initialState,
    reducers: {
        openInbox: (state) => {
            state.isOpen = true;
        },
        closeInbox: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openInbox, closeInbox } = inboxLayoutSlice.actions;
export default inboxLayoutSlice.reducer;
