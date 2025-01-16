import React, { useState } from 'react'
import './Footer.css'
import { Select, Space } from 'antd'
import PaginationCustom from './pagination/Pagination'

const Footer = () => {
  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ]
  const [value, setValue] = useState(options[0])
  return (
    <>
      <div className="Footer">
        <div className="pagination">
          <PaginationCustom elements={value.value}></PaginationCustom>
        </div>
      </div>
    </>
  )
}
export default Footer
