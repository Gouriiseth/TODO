import Todo from './components/Todo'
import  { useState } from "react"

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <>
      <Todo
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      
      />
    </>
  )
}

export default App
