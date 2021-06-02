import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CategorySearch } from '@appbaseio/reactivesearch';
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px', },
    });
function Todo() {
    const classes = useStyles();    
    const[todo,setTodo]=useState([])
    const[id,setId]=useState(1)
    const[todoList,setTodoList]=useState('')

    useEffect(() => {
        
       
            setTodo(JSON.parse(window.localStorage.getItem('user')))
        
    }, [setTodo])
    function    handleChange(e){
        setTodoList(e.target.value)
    }
    function    handleClick(e){
        e.preventDefault()
        if(todoList!==''){setTodo([...todo,{name:todoList,id:id}])}
        console.log(todo)
        setTodoList('')
        setId(id+1)
        localStorage.setItem('user', JSON.stringify(todo));
        
    }
    function    filter(event){
        
        let filtered  =   todo.filter(todos   => todos.id.toString()!==event.target.value )
        setTodo(filtered)
       
        
    }

    return (
        <div>
           
            <form>
                <TextField id="standard-basic" label="Standard"  type='text' value={todoList}    onChange={handleChange} ></TextField>
                <Button className={classes.root} onClick={handleClick}>add</Button>
            </form>
            {todo.map(todo  =>  {return  (<div><span>{todo.name}</span>
        <button value={todo.id} onClick={filter}>delete</button></div>)})}
        </div>
    )
}

export default Todo
