import styled from 'styled-components'
import {FiCheckCircle} from 'react-icons/fi'
import { TodoItem } from '../types/types'

type DoneItemProps = {
  _id : string
  content ?: string
  unCheckTodoItem : (unCheckedTodo: TodoItem) => void
}

const DoneItemComponent = ({ _id, content, unCheckTodoItem }: DoneItemProps) => {
  const onClickCircle = () => {
    unCheckTodoItem({_id:_id, content:content})
  }

  return (
    <DoneItemContainer>
      <FiCheckCircle className="icon" onClick={onClickCircle} />
      <Span>{content}</Span>
    </DoneItemContainer>
  )
}

export default DoneItemComponent

const Span = styled.span`
  color : #9f9f9f;
  text-decoration: line-through;
`

const DoneItemContainer = styled.li`
  display : flex;
  align-items: center;
  margin-bottom: 1rem;

  .icon{
    cursor : pointer;
    margin-right : 1rem;
    color : #4FE3A4;
    transition : color 0.25s ease-in;
    &:hover{
      color : #bfbfbf;
    }
  }
`
