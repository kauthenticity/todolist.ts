import { useState } from 'react'
import type {TodoItem} from '../types/types'

const useTodo = (todos: TodoItem[])=>{ 
  const [todoList, setTodoList] = useState(todos)
  const [doneList, setDoneList] = useState(todos)

  const addTodoItem = (todo: TodoItem) => {
    setTodoList([...todoList, todo])
  }
  const removeTodoItem = (_id: string) => {
    setTodoList(todoList.filter((todo)=>todo._id !== _id))
  }

  const checkTodoItem = (checkedTodo: TodoItem) => {
    setTodoList(todoList.filter((todo) => todo._id !== checkedTodo._id))
    setDoneList([...doneList, checkedTodo])
  }

  const unCheckTodoItem = (unCheckedTodo: TodoItem) => {
    setDoneList(todoList.filter((todo) => todo._id !== unCheckedTodo._id))
    setTodoList([...todoList, unCheckedTodo])
  }

  return {todoList, doneList, addTodoItem, removeTodoItem, checkTodoItem, unCheckTodoItem}
}

export default useTodo