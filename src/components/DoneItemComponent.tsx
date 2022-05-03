import styled from 'styled-components'
import {FiCheckCircle} from 'react-icons/fi'
import { TodoItem } from '../types/types'

type TodoItemProps = {
  _id : string
  content ?: string
  unCheckTodoItem : (unCheckedTodo: TodoItem) => void
}

const DoneItemComponent = ({ _id, content, unCheckTodoItem }: TodoItemProps) => {
  const onClickCircle = () => {
    unCheckTodoItem({_id:_id, content:content})
  }


  return (
    <DoneItemContainer>
      <FiCheckCircle onClick={onClickCircle} />
      <span>{content}</span>
    </DoneItemContainer>
  )
}

export default DoneItemComponent

const DoneItemContainer = styled.li`
  
`
