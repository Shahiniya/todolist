import styled from 'styled-components';
import {ReactComponent as check} from '../../assests/icons/check.svg';
import {ReactComponent as star} from '../../assests/icons/star.svg';
import {ReactComponent as trash} from '../../assests/icons/trash.svg';
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
height:800px;
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

export const Check = styled(check)`
background-color:red;
`;

export const Star = styled(star)`
width:30px;
height:30px;
color:white;
background-color:white;
`;
// export const Heart = styled(heart)`

// `;
export const Trash = styled(trash)`
width:10px;
height:10px;
`;
