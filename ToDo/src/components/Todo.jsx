import { useEffect, useState } from "react";
// import '../App.css'

// import React from 'react'
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // const [edit, setEdit] = useState(null)
  const [updateEdit, setUpdateEdit] = useState();
  const [completedTodos, setCompletedTodos] = useState([]);



  const handleAddTodo = () => {
    if (input !== "") {
      if (!isEdit) {
        setTodos([
          ...todos,
          {
            text: input,
            status: false,
          },
        ]);
      } else {
        // setTodos([...todos, input])
        setTodos((prevData) => {
          const updatedData = prevData.map((e) =>
            // e.text==updateEdit?input:e.text
            {
              if (e.text == updateEdit) {
                e.text = input;
                e.status = false;
                console.log(e);
                return e;
              } else {
                return e;
              }
            }
          );
          console.log(updatedData);
          return updatedData;
        });
        setIsEdit(false);
        setUpdateEdit(null);
      }
      setInput("");
    }
  };

  const handleDoneTodo = (elem)=>{
    console.log(elem);
    todos.map(todo=>{
      console.log(todo);
    })

    const p=todos.filter(todo=>todo.text!=elem.text);
    console.log(p);
    setTodos(p);
   setCompletedTodos(todo=>[...todo,elem])
    console.log(completedTodos);
      
    };
    useEffect(() => {
      console.log(completedTodos);
    }, [completedTodos])


  const handleUndoneTodo=(elem)=>{
    console.log(elem);
  }
    
  const handleEditTodo = (elem) => {
    setIsEdit(true);
    setInput(elem);
    setUpdateEdit(elem);
  };

  const handleDeleteTodo = (elem) => {
    setTodos(todos.filter((todo) => todo.text!=elem));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200">
      <div className="container max-w-md  bg-yellow-300 flex flex-col rounded h-fit pb-10 place-items-center">
        <figure>
          <figcaption className="text-3xl font-bold pt-5">
            ADD ITEMS TO YOUR LIST
          </figcaption>
        </figure>
        <div>
          <input
            type="text"
            className="text-2xl rounded mt-6 bg-white rounded px-3"
            placeholder="add tasks.."
            value={input}
            id="editText"
            required
            onChange={(event) => setInput(event.target.value)}
            />
          <button onClick={handleAddTodo}>
            <i className="fa fa-plus add-btn pl-2"></i>{" "}
          </button>
        </div>
        <div className="mt-6 w-4/5 overflow-y-auto h-40  ">
          {todos.map((elem) => (
            <div className="flex bg-green-200 rounded p-3 mb-3 ">
              <p className="text-1xl w-3/4">{elem.text}</p>
              <div
                className={`btns pl-3 ${elem.status ? "done" : ""}`}
                id="donee"
                onClick={(elem.status = !elem.status)}
              >
                <button className="complete-task pr-2" onClick={()=>handleDoneTodo(elem)}>
                  <i className="fa fa-check-circle"></i>
                </button>

                <button
                  className="edit-task pr-2"
                  onClick={() => handleEditTodo(elem.text)}
                >
                  <i className="fa fa-edit"></i>
                </button>

                <button
                  className="delete-task "
                  onClick={() => handleDeleteTodo(elem.text)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* // completed task */}
      <div className="completed-block mt-4 flex flex-row justify-evenly bg-yellow-300 w-5/6  ">
        <div className="completed-task text-2xl font-bold h-fit pb-3">
          Completed Task
          <div className="flex flex-col bg-green-200 rounded  pb-10 mt-3 px-5">
            {completedTodos.map((elem)=>(
            <div className="flex flex-row justify-between text-lg font-[500]"  >
                <p>{elem.text}</p> 
                <button className="complete-task pr-2" onClick={() => handleUndoneTodo(elem)}>
                  <i className="fa fa-check-circle"></i>
                </button>
              </div>

            ))} 
            </div>
        </div>
        <div className="completed-task text-2xl font-bold">Deleted Task</div>
        <div className="flex flex-col bg-yellow-300 rounded h-fit pb-10 place-items-center "></div>
      </div>
    </div>
  );
};

export default Todo;
