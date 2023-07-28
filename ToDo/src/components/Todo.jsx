import { useState } from "react"

// import React from 'react'
const Todo = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    // const [edit, setEdit] = useState(null)

    const handleAddTodo=()=>{
        if(!isEdit){
            if (input !== '') {
                setTodos([...todos, input
                ]),
                    setInput('')
                let abs = new Date().getTime().toString();
                let t = todos.length;
                console.log(todos[t - 1].id);

            }
            const editText = document.getElementById("editText")
            // editText.value = "";
        }
        else {
            if(input !=='')
                setTodos([...todos,input])
        }
    }

    
    const handleDoneTodo=()=>{
    }
    
    const handleEditTodo = (elem) => {
        const editText= document.getElementById("editText")
       const i= todos.findIndex((item)=>item===elem);
       console.log(i);
       editText.value=elem
       console.log(input);
       setIsEdit(true);
       handleAddTodo();
    }




    // const handleDeleteTodo = (id) => {
    //     setTodos(todos.filter(todo => todo.id !== id));
    // };
    const handleDeleteTodo = (elem) => {
        setTodos(todos.filter(todo => elem!==todo));
    };

    return (
        <div className="flex justify-center items-center h-screen bg-green-200">
            <div className="container max-w-md  bg-yellow-300 flex flex-col rounded h-fit pb-10 place-items-center">
                <figure>
                    <figcaption className='text-3xl font-bold pt-5'>ADD ITEMS TO YOUR LIST</figcaption>
                </figure>
                <div >
                    <input type="text" className="text-2xl rounded mt-6 bg-white rounded px-3" placeholder="add tasks.." id="editText" required onChange={(event)=>setInput(event.target.value)}  />
                    <button onClick={handleAddTodo} >
                        <i className="fa fa-plus add-btn pl-2" ></i>  </button>
                </div>
                <div className="mt-6 w-4/5  ">
                    {todos.map((elem)=>(
                        <div className="flex bg-green-200 rounded p-3 mb-3 " 
                        >
                        
                        <p className="text-1xl w-3/4">{elem}</p>
                            

                            <div className="btns pl-3" onClick={()=> handleDoneTodo()}>
                        <button className="complete-task pr-2">
                            <i className="fa fa-check-circle"></i>
                        </button>
                       
                         <button className="edit-task pr-2" onClick={()=> handleEditTodo(elem)}>
                                <i className="fa fa-edit"></i>
                        </button>

                        <button className="delete-task " onClick={()=> handleDeleteTodo(elem)} >
                        <i className="fa-solid fa-trash"></i></button>
                        </div>
                     </div> 
                    )
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Todo