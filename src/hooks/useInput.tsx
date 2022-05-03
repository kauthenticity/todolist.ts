import { useState } from 'react'

const useInput = (content: string) => {
  const [todo, setTodo] = useState(content)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  const clearInput = () => {
    setTodo('')
  }

  return {todo, onChangeInput, clearInput}
}

export default useInput