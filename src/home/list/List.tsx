import React, { useState } from 'react'
import './List.css'
import ListEntry from './list-element/ListEntry'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { sort } from '../../redux/actions'

interface Map {
  [key: string]: 0
}

const List = () => {
  const listTypes = useSelector(
    (state: RootState) => state.listElement.listTypes
  )
  const starWarsCharacters = useSelector(
    (state: RootState) => state.listElement.list
  )
  return (
    <div className="body">
      <div className={'header'}>
        {listTypes.map((item, index) => (
          <div className={`filter ${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </div>
        ))}
      </div>
      <div className={'list'}>
        {starWarsCharacters.map((item, index) => (
          <ListEntry element={item} length={listTypes.length}></ListEntry>
        ))}
      </div>
    </div>
  )
}
export default List
