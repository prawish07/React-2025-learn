import React, { useState } from 'react'
import { Form,Button,Container,Row,Col , Alert} from 'react-bootstrap'
import { FaTrash} from 'react-icons/fa';
const App = () => {
  const intialData=JSON.parse(localStorage.getItem("todos"))
  const[todoList,setTodoList]=useState([...intialData])
  const[text,setText]=useState("")
  const addTodo=()=>
    {
    const newTodo=([
      ...todoList,
      {
      data:text,
      date:new Date().toLocaleDateString().split(" ,"),
      isCompleted: false,
    }])
    setText("")
    setTodoList(newTodo)
    localStorage.setItem("todo",JSON.stringify(newTodo))
  }
  const toggleTodoCompletion=(idx)=>{
   const newTodo=todoList.map((todo,index)=>
    index === idx ? {...todo, isCompleted: !todo.isCompleted}
    : todo
   )
   setTodoList(newTodo)
   localStorage.setItem("todo",JSON.stringify(newTodo))

  }
  const deleteTodo=(idx)=>{
    const response=window.confirm("Do you want to delete")
    if(response)
    { const newTodo=todoList.filter((_,index)=>
      index === idx? false
      :true
    )
   setTodoList(newTodo)
  localStorage.setItem("todo",JSON.stringify(newTodo))}
   

  }
//  const deleteTodo=(idx)=>{
//       const response=window.confirm("Do you want to delete?")
//       if(response)
//         {const newTodo=todoList.filter((_,index)=>
//        index === idx ? false
//       : true
//       )
//       setTodoList(newTodo)
//       localStorage.setItem("todos",JSON.stringify(newTodo))
//     }
//      }
 
  return (
    <Container>
      <h3>Add TodoList</h3>
      <Form.Control type='text'
      value={text}

      onChange={(e)=>setText(e.target.value)} />
      <Button onClick={addTodo}>Add</Button>
      {todoList.map((todo,index)=>{
        return(
          <Row>
            <Col>
            <Alert
          className='text-start'
          variant={
            todo.isCompleted? 'danger'
            :'primary'
          }
          onClick={()=>toggleTodoCompletion(index)}
          style={{
            textDecoration:todo.isCompleted ?"Line-through"
            :"None"
          }}>
            <p>{todo.data}</p>
            <small>{todo.date}</small>
           </Alert>
           </Col>
           <Col>
           <FaTrash cursor={'pointer'} onClick={()=>deleteTodo(index)}/>
           </Col>
          </Row>
          
        
        )
      })}
      
     
    </Container>
    
  )
}
export default App