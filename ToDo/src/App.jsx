import Todo from './components/Todo'
import  { useState } from "react"

function App() {

  const [inputt, setInputt] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <>
      <Todo
        inputt={inputt}
        setInputt={setInputt}
        todos={todos}
        setTodos={setTodos}
      
      />
    </>
  )
}

export default App
