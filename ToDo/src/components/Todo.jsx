// import React from 'react'


const Todo = (inputt,setInputt,todos,setTodos) => {

    const handleAddTodo=()=>{
        if(inputt!==''){
            setTodos([...todos,{id:new Date().getTime().toString(),text:inputt}])
            setInputt('')
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-green-200">
            <div className="container max-w-md  bg-yellow-300 flex flex-col rounded h-3/4 place-items-center">
                <figure>
                    <figcaption className='text-3xl font-bold pt-5'>ADD ITEMS TO YOUR LIST</figcaption>
                </figure>
                <div >
                    <input type="text" className="text-2xl rounded mt-6 bg-white rounded px-3" placeholder="add tasks.." value={inputt} onChange={(event) =>
                       setInputt(event.target.value)
                    } />
                    <button onClick={handleAddTodo} >
                        <i className="fa fa-plus add-btn pl-2" ></i>  </button>
                </div>
                <div className="mt-6">
                    {todos.map((todo)=>(
                        <div className="flex items-center" key={todo.id}>
                        <h3 className="text-2xl">{todo.text}</h3>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo