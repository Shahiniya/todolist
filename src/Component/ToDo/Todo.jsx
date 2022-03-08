import { Box, BigContainer, Container,Container1, Title, Trash,Check, Star, Input1 } from './style'
import React,{useState} from 'react';
import check from '../../assests/icons/check.png';
import star from '../../assests/icons/star.png';
import trash from '../../assests/icons/delete.png';

// import { Trash } from 'styled-icons/bootstrap';



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

    const onDelete = (id) =>{
     let res = newEntry.filter((value)=> value.id !== id)
     setNewentry(res);
    }
  return (
    <Container>
        <Title>
        <h1>To Do List</h1>
                </Title>
    
       <h2>
         Data now: {new Date().getHours()} : {new Date().getMinutes()}
       </h2>
       
    <BigContainer>
    
        {newEntry.map((value)=>( 
          <Box key={id}>
          <div>
          <h2>{value.todo}</h2>
          </div>
          <div>
          <Check src={check} alt='test'/>
          <Star src={star} alt='test'/>
          <Trash onClick={()=>onDelete(value.id)} src={trash} alt='test'/>
          </div>
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
