import { Heart,Box, BigContainer, Container,Container1, Title } from './style'
import React,{useState} from 'react'
import { Trash } from 'styled-icons/bootstrap';



export const Todo = (id) => {

    const [todo,setTodo] = useState('');
    const [newEntry,setNewentry] = useState([]);

    const onChange =(e)=>{
      setTodo(e.target.value);
    }

    const onAdd = () => {
        // // setTodo(e.target.value)
        // e.preventDefault();
       const newdata={todo:todo};
       setNewentry([...newEntry,newdata]);
       setTodo('');
    }
  return (
    <Container>
        <Title>
        <h1>To Do List</h1>
                </Title>
        {
          
        }
    <BigContainer>
    
        {newEntry.map((value)=>( 
          <Box key={id}>
          <h2>{value.todo}</h2>
          <Heart/>
          <Trash/>
          </Box>
          
         ))}
            
   </BigContainer>
    <Container1 key={id}>
    <input onChange={(e)=>onChange(e)} value={todo} type='text' placeholder='Learning Request' />
    <div>
    <button  onClick={onAdd} >Add</button>
    </div>
   </Container1>
   

    </Container>
   )
  }
