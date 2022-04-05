import React from "react";
import styled from "styled-components";
import Logingbg from "../../asset/images/_21_hd-gif-wallpaper_1920x1080-Desktop-Background-Gif-Ryanmartinproductions.com.gif";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/Firebase";
import { setName, setLogin, setUserID } from "../../Reducer/NoteData";
import { CREATE_USER } from "../../Queries/Queries";
import { useMutation } from "@apollo/client";

const LoginBox = styled.div`
  background-image: url(${Logingbg});

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media screen and (max-width: 520px) {
    background-position: right;
  }
  .login-button {
    height: 10%;
    margin-top: 20%;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: 18px;

    :hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;
const Login = () => {
  const [addUser] = useMutation(CREATE_USER);

  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const id = result.user.uid;
        const name = result.user.displayName;
        if (result.user.emailVerified) {
          addUser({ variables: { id: id, name: name } });
          dispatch(setUserID(id));
          dispatch(setName(name));
          dispatch(setLogin(true));
        } else {
          alert("Wrong Email");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginBox>
      <button onClick={signInWithGoogle} className="login-button">
        LOGIN
      </button>
    </LoginBox>
  );
};

export default Login;
