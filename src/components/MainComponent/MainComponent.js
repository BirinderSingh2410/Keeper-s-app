import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import AddNewNote from "../AddNewNote/AddNewNote";
import Note from "../Note/Note";
import styled from "styled-components";
import EditNote from "../EditNote/EditNote";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "../../Features/NoteData";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DATA } from "../../Queries/Queries";
import CircularProgress from '@mui/material/CircularProgress';
import LoadingBg from '../../asset/images/Capture.PNG'

const NoteFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoadingBox = styled.div`
  text-align:center;
  overflow:hidden;
  .bgimage{
    height:110vh;
  }
  .loading-content{
    display:flex;
    flex-direction:column;
    width:270px;
    height:230px;
    align-items: center;
    justify-content: space-between;
    position:absolute;    
    margin-top:-500px;
    margin-left:40%;
    @media screen and (max-width: 650px) {
      margin-left: 30%;
    }
    @media screen and (max-width: 450px) {
      margin-left: 10%;
    }
    .loading-heading{
      font-weight:200;
      color:white;
      font-size:60px;
      
    }
    
      p{
        color: white;
    font-size: 30px;
    font-weight: 100;
        
      }
  }
`

const MainComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const Array = useSelector((state) => state.notes.value);
  const editKey = useSelector((state) => state.notes.editKey);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) {
  document.body.style.overflow="hidden";
  return(
    <LoadingBox>
      <img src={LoadingBg} className="bgimage"/>
      <div className="loading-content">
        <h1 className="loading-heading">Hi There!</h1>
        <p>Please wait</p>
        <CircularProgress className="circular-loading" />
      </div>
    </LoadingBox>
  ) 
}
  if (!trigger) {
    dispatch(getNotes(data.notes_data));
    setTrigger(true);
  }

  return (
    <div>
      <Header />
      <div style={{ textAlign: "-webkit-center" }}>
        <AddNewNote />
      </div>
      <NoteFlex>
        {editKey ? <EditNote /> : null}
        {Array.map((i) => {
          return (
            <Note
              key={i.id}
              id={i.id}
              color={i.color}
              title={i.title}
              desc={i.description}
            />
          );
        })}
      </NoteFlex>
    </div>
  );
};

export default MainComponent;
