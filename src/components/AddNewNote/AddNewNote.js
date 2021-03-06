import React, { useState } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { CirclePicker } from "react-color";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { insertNote } from "../../Reducer/NoteData";
import { useMutation } from "@apollo/client";
import { INSERT_DATA } from "../../Queries/Queries";

const NewNoteBox = styled.div`
  width: 500px;
  height: 250px;
  border-radius: 14px;
  margin-top: 6vh;
  box-shadow: 0px 0px 7vw darkgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: 520px) {
    height: 300px;
    width: 90%;
  }
  .input {
    width: 80%;
  }
  .title {
    height: 50px;
    font-size: 30px;
  }

  .desc {
    margin-top: -20px;
  }
  .add-button {
    background-color: #005e63;
    position: absolute;
    margin-top: 226px;
    margin-left: 330px;
    z-index: 4;
    :hover {
      background-color: #068f64;
    }
    @media screen and (max-width: 520px) {
      margin-top: 282px;
      margin-left: 60%;
    }
  }
`;
const ColorBox = styled.div`
  position: absolute;
  margin-top: 226px;
  margin-left: 50px;
  z-index: 100;
  @media screen and (max-width: 520px) {
    margin-top: 260px;
    margin-left: -20%;
  }
`;

export const ColorPick = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 90px;
  .color-picker {
    width: 10px;
    position: absolute;
    margin-top: 50px;
    @media screen and (max-width: 520px) {
      margin-left: 30%;
    }
  }
`;
const ariaLabel = { "aria-label": "description" };

const AddNewNote = () => {
  const [titleinput, setTitle] = useState("");
  const [descriptioninput, setDescription] = useState("");
  const [click, setClick] = useState(false);
  const [colorClick, setColorClick] = useState("");
  const dispatch = useDispatch();

  const Array = useSelector((state)=>state.notes.array);
  const gmailId = useSelector((state) => state.notes.userID);
  const [addTodo] = useMutation(INSERT_DATA);

  function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid.toString();
}

  function addNewNote() {
    setClick(false);
    var sortId=0;
    if(Array.length !== 0)sortId = (Array[Array.length - 1].sort_id + 1);
    const uniqueIndex = create_UUID();
    if (titleinput !== "" || descriptioninput !== "") {
      addTodo({
        variables: {
          title: titleinput,
          description: descriptioninput,
          color: colorClick,
          id: uniqueIndex,
          gmailId: gmailId,
          sort_id : sortId
        },
      });

      dispatch(
        insertNote({
          id: uniqueIndex,
          title: titleinput,
          description: descriptioninput,
          color: colorClick,
          gmailId: gmailId,
          sort_id : sortId
        })
      );
    }
    setColorClick("");
    setTitle("");
    setDescription("");
    document.getElementById("input-tag-title").value = "";
    document.getElementById("input-tag-desc").value = "";
  }

  return (
    <NewNoteBox style={{ backgroundColor: colorClick }}>
      <Input
        id="input-tag-title"
        placeholder="Title"
        className="input title"
        inputProps={ariaLabel}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        id="input-tag-desc"
        placeholder="Description"
        className="input desc"
        inputProps={ariaLabel}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <ColorBox>
        {click ? (
          <ColorPick>
            <IconButton onClick={() => setClick(false)}>
              <CloseIcon />
            </IconButton>
            <CirclePicker
              className="color-picker"
              onChange={(e) => setColorClick(e.hex)}
            />
          </ColorPick>
        ) : (
          <Tooltip title="Pick Color">
            <IconButton onClick={() => setClick(true)}>
              <ColorLensIcon />
            </IconButton>
          </Tooltip>
        )}
      </ColorBox>
      <Fab
        color="primary"
        aria-label="add"
        className="add-button"
        onClick={addNewNote}
      >
        <AddIcon />
      </Fab>
    </NewNoteBox>
  );
};

export default AddNewNote;
