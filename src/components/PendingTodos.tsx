import styled from 'styled-components'
import type { TodoItem } from '../types/types'
import TodoItemComponent from './TodoItemComponent'

type PendingTodosProps = {
  todoList: TodoItem[]
  removeTodoItem: (_id: string) => void
  checkTodoItem : (checkedTodo: TodoItem) => void
}

const PendingTodos = ({ todoList, removeTodoItem, checkTodoItem }: PendingTodosProps) => {
  return (
    <Ul>
      {todoList.map(({ content, _id }) =>
        <TodoItemComponent key={_id} _id={ _id} content={content} checkTodoItem={checkTodoItem} removeTodoItem={ removeTodoItem}/>
      )}
    </Ul>
  )
}

export default PendingTodos

const Ul = styled.ul``
