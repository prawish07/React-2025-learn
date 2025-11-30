import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import{Container, Form,Alert,Row,Col} from 'react-bootstrap'
import { FaPlus,FaTrash} from 'react-icons/fa';
import { useState } from 'react';


function App2() {
  const intialData=JSON.parse(localStorage.getItem("todos"))
  const[todoList,setTodoList]=useState([...intialData])
  const[text,setText]=useState("")
  const addTodo=()=>{
    const newTodo=([
      ...todoList ,
      {
      data:text,
      date:new Date().toLocaleString().split(","),
       isCompleted:false,

    }])
    setText("")
    setTodoList(newTodo)
    localStorage.setItem("todo",JSON.stringify(newTodo))
     }
     const toogleTodoCompletion=(idx)=>{
      // console.log("DDDD")
      const newTodo=todoList.map((todo,index)=>
        index === idx ? {...todo, isCompleted: !todo.isCompleted}
        :todo

      )
      setTodoList(newTodo)
      localStorage.setItem("todos",JSON.stringify(newTodo))

     }
     const deleteTodo=(idx)=>{
      const response=window.confirm("Do you want to delete?")
      if(response)
        {const newTodo=todoList.filter((_,index)=>
       index === idx ? false
      : true
      )
      setTodoList(newTodo)
      localStorage.setItem("todos",JSON.stringify(newTodo))
    }
     }
    
  return (
   <Container className='mt-3 text-center'>
    <h3>TodoList App</h3>
    <Form.Control 
    onKeyPress={(e)=>e.key === 'Enter' && addTodo()
      
    }
    
    type='text'
    value={text}
    onChange={(e)=>setText(e.target.value)}/>
    <br/>
    <Button onClick={addTodo}>
      <FaPlus/>
      <label className='ms-2'>Add</label>
      </Button>
      <br/>
      <br/>
      {todoList.length>0
      ? todoList.map((todo,index)=>{
        return (
          <Row>
            <Col xs={10}>
            <Alert 
        variant={todo.isCompleted ?'danger'
          :'primary'
        }
        className='text-start' 
        style={{
          cursor:'pointer',
          textDecoration: todo.isCompleted? 'Line-through'
          :'none'
        }}
        onClick={()=>toogleTodoCompletion(index)} >
          <h3>{todo.data}</h3>
          <small>{todo.date}</small>
        </Alert>
            </Col>
            <Col className='mt-3'>
            <FaTrash 
            onClick={()=>deleteTodo(index)}
            size='40'color='red'
            cursor={'pointer'}/>

            </Col>
          </Row>
        )
        
        
      })
      :"No todos"
    }
   </Container>
  );
}

export default App2;
