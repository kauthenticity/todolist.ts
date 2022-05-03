import styled from 'styled-components'
import { FiDelete, FiCircle } from 'react-icons/fi'
import { TodoItem } from '../types/types'

type TodoItemProps = {
  _id : string
  content ?: string
  removeTodoItem: (_id: string) => void
  checkTodoItem : (checkedTodo: TodoItem) => void
}

const TodoItemComponent = ({ _id, content, checkTodoItem, removeTodoItem }: TodoItemProps) => {
  const onClickCircle = () => {
    checkTodoItem({_id:_id, content:content})
  }

  const onClickDelete = () => {
    removeTodoItem(_id)
  }

  return (
    <TodoItemContainer>
      <FiCircle onClick={onClickCircle} />
      <span>{content}</span>
      <FiDelete onClick={onClickDelete}/>
    </TodoItemContainer>
  )
}

export default TodoItemComponent

const TodoItemContainer = styled.li`
  
`
