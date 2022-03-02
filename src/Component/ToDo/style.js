import styled from 'styled-components';
import { Exclamation } from 'styled-icons/bootstrap';
import { Eca } from 'styled-icons/crypto';
import {ReactComponent as heart} from '../../assests/icons/heart.svg';
// import {ReactComponent as heart} from '../../assests/icons/heart.svg';
import {ReactComponent as trash} from '../../assests/icons/trash.svg';

export const Container= styled.div`
width:550px;
height:700px;
background-color:black;
color:white;
margin:10px;
display:flex;
flex-direction:column;
position: relative;

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

export const BigContainer = styled.div`
display:flex;
flex-direction:column;
margin:5px 20px;
 overflow:auto; 
 width:90%;
height:400px;
color:white;
 /* background-color:blue; */
`;
export const Box = styled.div`
width:450px;
height:70px;
color:white;
background-color:black;
display:flex;
margin:20px 20px;
border:3px solid white;
border-radius: 5px ;
font-size:20px;

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


export const Heart = styled(heart)`

`;
// export const Heart = styled(heart)`

// `;
export const Trash = styled(trash)`

`;
