import { createSlice } from '@reduxjs/toolkit'
import {
  ListElement,
  starWarsCharacters,
  listTypes,
} from '../types/list-element'

interface ListElementState {
  list: ListElement[]
  favorites: ListElement[]
  listTypes: string[]
}

const initialState: ListElementState = {
  list: starWarsCharacters,
  favorites: [],
  listTypes: listTypes,
}

const listElementSlice = createSlice({
  name: 'listElement',
  initialState,
  reducers: {
    sort: (state, action) => {
      if (action.payload === 'asc') {
        state.list = state.list.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (action.payload === 'desc') {
        state.list = state.list.sort((a, b) => b.name.localeCompare(a.name))
      }
    },
    handleFavoriteClick: (state, action) => {
      const index = state.list.findIndex((el) => {
        return el.name === action.payload.name
      })
      if (index >= 0) {
        if (state.list[index].favorite) {
          // remove favorite
          state.favorites = state.favorites.filter(
            (element) => element.name !== action.payload.name
          )
          state.list[index].favorite = false
        } else {
          // add favorite
          state.favorites.push(action.payload)
          state.list[index].favorite = true
        }
      }
    },
  },
})

export const { handleFavoriteClick, sort } = listElementSlice.actions
export default listElementSlice.reducer
