import { configureStore } from '@reduxjs/toolkit'
import authReducer from "@/redux/features/auth/authSlice"
import boldReducer from "@/redux/features/editor/bold"
import italicReducer from "@/redux/features/editor/italic"
import isOpenReducer from "@/redux/features/editor/isOpen"
import themeReducer from "@/redux/features/theme/themeSlice"
import inboxLayoutReducer from '../features/theme/inboxLayoutSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bold: boldReducer,
    italic: italicReducer,
    isOpen: isOpenReducer,
    theme: themeReducer,
    inboxLayout: inboxLayoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch