import { configureStore } from '@reduxjs/toolkit'
import listElementReducer from './actions'

export const store = configureStore({
  reducer: {
    listElement: listElementReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
