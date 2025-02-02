import React, { useEffect, useState } from 'react'

const ToDoList = () => {

const [todos, setTodos] = useState([])
const [inputValue, setInputValue] = useState("")


const handleSubmit = (e) =>{
    e.preventDefault()

    if(inputValue.trim()){
        setTodos([...todos, inputValue])

       
        setInputValue("")
    }
}



const handleChange = (e) =>{
    setInputValue(e.target.value)
}





  return (
    <div>
        <h1>ToDo List</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} 
            onChange={handleChange} placeholder='Enter your ToDo' 
            />
            <button type='submit'>Addd ToDo
            </button>
        </form>

        <ul>
            {todos.map((todo, index)=>{
                return <li key={index}>{todo}</li>
            })}
        </ul>
    </div>
  )
}

export default ToDoList