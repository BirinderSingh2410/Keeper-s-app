import React,{useState} from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const EditNoteBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
`;
const TransparentBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 250;
  opacity: 0.6;
`;

const EditPopUp = styled.div`
  width: 90%;
  height: 350px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 10px;
  margin-left: 5%;
  margin-top: 10%;
  justify-content:space-evenly;
  background-color: white;
  align-items:center;
  .input{
    width:90%;
  }
  .title{
    height:30%;
    font-size:2.8em;
    font-weight:600;
  }
  .close-btn{
    margin-left:85%;
    :hover{
      cursor:pointer;
      color:firebrick;
    }
  }
  .desc{
    font-size:1.5em;
  }
  .save-btn{
    background-color:#005e63;
    :hover{
      background-color: #068f64;
    }
  }
`;

const ariaLabel = { "aria-label": "description" };

const EditNote = (props) => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  function changedData(){
    props.setEditNote(false);

  }

  return (
    <EditNoteBox>
      <EditPopUp>
        <CloseIcon className="close-btn" onClick={()=>{props.setEditNote(false)}}/>
        <Input
          placeholder="Title"
          className="input title"
          inputProps={ariaLabel}
          onChange={((e)=>{setTitle(e.target.value)})}
        />
        <Input
          placeholder="Description"
          className="input desc"
          inputProps={ariaLabel}
          onChange={(e)=>{setDescription(e.target.value)}}
        />
        <Button variant="contained" className="save-btn" onClick={changedData} onClickCapture={()=>{props.clickCapture(title,description)}}>Save</Button>
      </EditPopUp>
      <TransparentBg />
    </EditNoteBox>
  );
};

export default EditNote;
