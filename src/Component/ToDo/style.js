import styled from 'styled-components';
// import { heart } from '@fortawesome/react-fontawesome'

export const Container= styled.div`
width:600px;
height:700px;
background-color:black;
color:white;
margin:10px;
display:flex;
flex-direction:column;
position: relative;
h2{
    text-align:left;
    /* background-color:red; */
    margin-left:10px;
}

`;
export const Title = styled.div`
width:300px;
height:70px;
color:white;
background-color:black;
display:flex;
justify-content:center;
align-items:center;
margin:20px 100px;
 /* overflow:scroll; */
`;

export const Input1 = styled.input`
background-color:white;
`;
export const BigContainer = styled.div`
display:flex;
flex-direction:column;
margin:5px 20px;
 overflow:auto; 
 width:90%;
height:800px;
color:white;
 /* background-color:blue; */
`;
export const Box = styled.div`
width:480px;
height:70px;
color:white;
background-color:grey;
display:flex;
margin:20px 20px;
border:3px solid white;
border-radius: 5px ;
font-size:20px;
h2{
    margin-right:40px;
}

`;
export const Container1 = styled.div`
width:500px;
height:50px;
color:white;
/* background-color:red; */
display:flex;
justify-content:space-between;
margin:430px 20px;
position:absolute;
top:200px;

input{
    width:200px;
    color:white;
    font-size:25px;
    background-color:black;
    border:none;

}
button{
    /* margin:10px 0px; */
    width:110px;
    height:40px;
    background-color:green;
    border-radius:5px;
    color:white;
    font-weight:bold;
    font-size:20px;
}

`;

export const Check = styled.img`
/* background-color:white; */
color:white;
width:40px;
height:40px;
margin:10px 0px;
position:absolute;
right:200px;
`;

export const Star = styled.img`
width:40px;
height:40px;
color:white;
margin:10px 10px;
position : absolute;
right:140px;
:hover{
    color:yellow;
    background-color:yellow;
}
/* background-color:white; */
/* margin-left:320px; */
`;

export const Trash = styled.img`
width:40px;
height:40px;
margin:10px 0px;
position : absolute;
right:100px;

/* background-color:white; */
`;
