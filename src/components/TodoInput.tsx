import React, {useState, CSSProperties} from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {RiAddLine} from 'react-icons/ri'
//import '../hooks/usetInput'
import { TodoItem } from '../types/types'

type onSubmitTodoProps = {
  onSubmitTodo : (todo:TodoItem) => void
}

const iconStyle:CSSProperties= {
  position : 'absolute',
  right : 0,
  cursor : 'pointer',
  color : '7f7f7f'
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
      <Input onChange={onChangeInput} value={todo.content} placeholder={"what is your main focus today?"}>
      </Input>
      <RiAddLine style={iconStyle} onClick={doneTodo} />
    </Form>
  
  )
}

export default TodoInput

const Input = styled.input`
  font-family : "Louis George Cafe";
  width : 100%;
  padding : 0.5rem;
  outline : none;
  border : none;
  border-bottom : 1px solid #7f7f7f;
  font-size : 0.8rem;
  
`

const Form = styled.form`
  position : relative;
  display : flex;
  align-items: center;
  justify-content: center;
  margin : 1.25rem 0;
`