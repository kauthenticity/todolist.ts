import React, {useState} from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
//import '../hooks/usetInput'
import { TodoItem } from '../types/types'

type onSubmitTodoProps = {
  onSubmitTodo : (todo:TodoItem) => void
}

const TodoInput = ({ onSubmitTodo}:onSubmitTodoProps) => {
  const [todo, setTodo] = useState({ _id: uuidv4(), content:""})

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, content : e.target.value})
  }

  const doneTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todo.content === '') {
      return
    }
    onSubmitTodo(todo)
    setTodo({ _id: uuidv4(), content:""})
  }


  return (
    <Form onSubmit={doneTodo}>
      <Input onChange={onChangeInput} value={ todo.content}>
      </Input>
      <Button onClick={doneTodo}>press</Button>
    </Form>
  
  )
}

export default TodoInput

const Input = styled.input``

const Form = styled.form`
  
`
const Button = styled.button``