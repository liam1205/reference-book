import React, { useState } from 'react'
import './ListEntry.css'
import { ListElement } from '../../../types/list-element'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import { Button, Modal } from 'antd'

import { useDispatch } from 'react-redux'
import { handleFavoriteClick } from '../../../redux/actions'

interface ChildComponentProps {
  element: ListElement | null
  length: number
}

const ListEntry = ({ element }: ChildComponentProps) => {
  /**
   * Modal
   */
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = (event: React.MouseEvent) => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  /**
   * Favorite Handling
   */
  const dispatch = useDispatch()
  const handleClickFavorite = () => {
    dispatch(handleFavoriteClick(element))
  }
  return (
    <>
      <div className={'entries'} onClick={showModal}>
        <div className="entry name">{element?.name}</div>
        <div className="entry height">{element?.height}cm</div>
        <div className="entry weight">{element?.weight}kg</div>
        <div className="entry planet">{element?.planet}</div>
        <div className="entry species">{element?.species}</div>
        <div className="entry gender">{element?.gender}</div>
        <div className="entry eyes">{element?.eyes}</div>
        <div
          className="entry favorite fav"
          onClick={(e) => e.stopPropagation()}
        >
          {element?.favorite ? (
            <StarFilled
              style={{ color: 'yellow' }}
              onClick={handleClickFavorite}
            ></StarFilled>
          ) : (
            <StarOutlined onClick={handleClickFavorite}></StarOutlined>
          )}
        </div>
      </div>
      <Modal
        title={element?.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={'modal'}>
          <div className={'information'}>
            <p>
              <b>Height</b>: {element?.height}cm
            </p>
            <p>
              <b>Weight</b>: {element?.weight}kg
            </p>
            <p>
              <b>Home Planet</b>: {element?.planet}
            </p>
            <p>
              <b>Species</b>: {element?.species}
            </p>
            <p>
              <b>Gender</b>: {element?.gender}
            </p>
            <p>
              <b>Eye Color</b>: {element?.eyes}
            </p>
          </div>

          <div className={'other'}>
            {element?.favorite ? (
              <StarFilled
                style={{ color: 'black' }}
                onClick={handleClickFavorite}
              ></StarFilled>
            ) : (
              <StarOutlined onClick={handleClickFavorite}></StarOutlined>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}
export default ListEntry
