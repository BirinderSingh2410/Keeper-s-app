import React from 'react'
import styled from 'styled-components';
import Logingbg from '../../asset/images/_21_hd-gif-wallpaper_1920x1080-Desktop-Background-Gif-Ryanmartinproductions.com.gif'
import { useDispatch } from 'react-redux';
import {signInWithPopup}from 'firebase/auth'
import {auth,provider} from '../../Firebase/Firebase'
import { setName,setLogin } from '../../Reducer/NoteData';

const LoginBox = styled.div`

background-image:url(${Logingbg});

/* Full height */
height: 100vh;


/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
text-align:center;


.login-button{
      height:10%;
      margin-top:20%;
      width:150px;
      height:50px;
      border-radius:8px;
      border:2px solid white;
      background-color:transparent;
      color:white;
      font-size:18px;

      :hover{
        background-color:white;
        color:black;
        cursor:pointer;
      }
}
`
const Login = () => {
 
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result);
      if(result.user.emailVerified){
        dispatch(setName(result.user.displayName));
        dispatch(setLogin(true));
      }  
    }).catch((error)=>{
        console.log(error);
    });
}

  return (
    <LoginBox>
        <button onClick={signInWithGoogle} className='login-button'>LOGIN</button>
    </LoginBox>
  )
}

export default Login