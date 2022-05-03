import styled from 'styled-components'
import {FiCircle, FiX, FiTrash2} from 'react-icons/fi'
import { TodoItem } from '../types/types'
// import './styles/style.css'

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
      <FiCircle className="circle icon"  onClick={onClickCircle} />
      <Span>{content}</Span>
      <FiX className="delete icon"  onClick={onClickDelete}/>
    </TodoItemContainer>
  )
}

export default TodoItemComponent
const Span = styled.span`
color : #4fe3a4;
font-weight: bold;
`
const TodoItemContainer = styled.li`
  display : flex;
  align-items: center;
  margin-bottom: 1rem;

  .icon{
    cursor : pointer;
    color : #bfbfbf;
    transition : color 0.25s ease-out;
    
  }
  .circle{
    margin-right : 1rem;
    color : #c0f0db;
    &:hover{
      color : #4fe3a4;
    }
  }
  .delete{
    font-size : 0.9rem;
    margin-left : auto;
    &:hover{
      /* color : #4FE3A4; */
      color : #7c7c7c;
    }
  }
`
