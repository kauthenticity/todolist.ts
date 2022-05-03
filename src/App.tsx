import { Todo } from './components/Todo'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import PendingTodos from './components/PendingTodos'
import DoneTodos from './components/DoneTodos'
import useTodo from './hooks/useTodo'



function App() {
  //const {todoList, addTodoItem, removeTodoItem, checkTodoItem, unCheckTodoITem} = useTodo([{_id:"", content :""}])
const {todoList, doneList, addTodoItem, removeTodoItem, checkTodoItem, unCheckTodoItem} = useTodo([])
  return (
    <Todo>
      <Header />
      <TodoInput onSubmitTodo={addTodoItem} />
      <PendingTodos todoList={todoList} removeTodoItem={removeTodoItem} checkTodoItem={checkTodoItem} />
      <DoneTodos doneList={doneList} unCheckTodoItem={ unCheckTodoItem}/>
    </Todo>
  )
}

export default App