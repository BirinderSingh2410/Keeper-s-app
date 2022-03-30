import React, { useState } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const NewNoteBox = styled.div`
  width: 40vw;
  height: 230px;
  border-radius: 14px;
  margin-top: 6vh;
  box-shadow: 0px 0px 7vw darkgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .input {
    width: 80%;
  }
  .title {
    height: 50px;
    font-size: 30px;
  }
  .add-button {
    background-color: #005e63;
    position: absolute;
    margin-top: 225px;
    margin-left: 26vw;
    z-index: 4;
    :hover {
      background-color: #068f64;
    }
  }
  .desc {
    margin-top: -20px;
  }
`;

const ariaLabel = { "aria-label": "description" };

const AddNewNote = (props) => {
  const [titleinput, setTitle] = useState("");
  const [descriptioninput, setDescription] = useState("");

  return (
    <NewNoteBox>
      <Input
        placeholder="Title"
        className="input title"
        inputProps={ariaLabel}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        placeholder="Description"
        className="input desc"
        inputProps={ariaLabel}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Fab
        color="primary"
        aria-label="add"
        className="add-button"
        onChange={props.onclick(titleinput, descriptioninput)}
        onClickCapture={props.clickcapture}
      >
        <AddIcon />
      </Fab>
    </NewNoteBox>
  );
};

export default AddNewNote;
