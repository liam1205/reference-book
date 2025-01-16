import './Pagination.css'
import { Pagination } from 'antd'

interface ChildComponentProps {
  elements: number
}

const PaginationCustom = ({ elements }: ChildComponentProps) => {
  return (
    <div className={'Pagination'}>
      <Pagination defaultCurrent={1} total={10000} />
    </div>
  )
}
export default PaginationCustom
