import React,{useState, useEffect} from 'react';
import './style.scss';

const ToDoList =()=>{

    const [todo, setTodo] = useState('');
    const [todoList,setTodoList] = useState([])

    const handleValueChange =(e)=>{
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const createTodo =(e)=>{
        if(e.key === 'Enter'){
            setTodoList([...todoList,todo]);
            setTodo('');
        }
    }

    return(
        <div className="todolist-container">
            <h1>TO Do LISt</h1>
            <div>
                <input 
                value={todo} 
                type="text" 
                placeholder="Enter Todo" 
                onChange={handleValueChange}
                onKeyPress={createTodo}
                />
                
            </div>
            <div>
                {todoList.map((item,index)=>{
                    return <p key={index}>{item}</p>
                })}
            </div>
        </div>
    )
}

export default ToDoList;