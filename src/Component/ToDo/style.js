import styled from 'styled-components';
// import {ReactComponent as heart} from './assests/icons/heart.svg'

export const Container= styled.div`
width:500px;
height:700px;
background-color:black;
color:white;
margin:10px;
display:flex;
flex-direction:column;

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

 width:90%;
height:70px;
color:white;
 background-color:blue;
`;
export const Box = styled.div`
width:100%;
height:70px;
color:white;
background-color:black;
display:flex;
margin:20px 0px;
border:3px solid white;
border-radius: 5px ;
font-size:20px;
 /* overflow:scroll;  */



`;
export const Container1 = styled.div`
width:100%;
height:50px;
color:white;
/* background-color:red; */
display:flex;
justify-content:space-between;
margin:450px 20px;

input{
    width:300px;
    color:white;
    font-size:20px;
    background-color:black;
    border:none;

}
button{
    margin:10px 10px;
    width:110px;
    height:40px;
    background-color:green;
    border-radius:5px;
    color:white;
    font-weight:bold;
    font-size:20px;
}

`;


// export const Heart = styled(heart)`

// `;

