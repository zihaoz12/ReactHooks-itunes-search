import React,{useState, useEffect} from 'react';
import './style.scss';

const ToDoList =()=>{

    const [todo, setTodo] = useState('');
    const [todoList,setTodoList] = useState([
        { text:'apple', isCompleted:false},
        { text:'banana', isCompleted:false},
        { text:'pear', isCompleted:false}
    ])

    const handleValueChange =(e)=>{
        setTodo(e.target.value)
    }
    const createTodo =(e)=>{
        if(e.key === 'Enter'){
            setTodoList([...todoList,{text:todo,isCompleted:true}]);
            setTodo('');
            console.log(todoList)
        }
        
    }

    const completeTodo = (index)=>{
        let newlist = [...todoList]
        if(newlist[index].isCompleted == false){
            newlist[index].isCompleted = true;
        }else{
            newlist[index].isCompleted = false;
        }
        console.log(newlist)
        setTodoList(newlist);
    }
    const removeTodo = (index)=>{
        console.log(index);
        let newlist = [...todoList]
        newlist.splice(index,1)
        setTodoList(newlist);
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
                    return <div key={index} className="todo"
                    style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
                                <p onClick={()=>completeTodo(index)}>{item.text}</p>
                                <button onClick={()=>removeTodo(index)}>X</button>
                            </div>
                })}
            </div>
        </div>
    )
}

export default ToDoList;