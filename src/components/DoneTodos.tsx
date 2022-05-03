import styled from 'styled-components'
import type { TodoItem } from '../types/types'
import DoneItemComponent from './DoneItemComponent'

type DoneTodosProps = {
  doneList: TodoItem[]
  unCheckTodoItem : (unCheckedTodo: TodoItem) => void
}

const DoneTodos = ({ doneList, unCheckTodoItem }: DoneTodosProps) => {
  return (
    <Ul>
      {doneList.map(({ content, _id }) =>
        <DoneItemComponent key={_id} _id={ _id} content={content} unCheckTodoItem={unCheckTodoItem}/>
      )}
    </Ul>
  )
}

export default DoneTodos

const Ul = styled.ul``
