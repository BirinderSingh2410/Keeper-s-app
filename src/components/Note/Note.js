import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteBox = styled.div`
  max-width: 300px;
  height: fit-content;
  padding: 3vw 4vw 6vw 3vw;
  margin-top: 9vh;
  word-break: break-word;
  margin-left: 4vw;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 0px 2vw darkgrey;
  p {
    margin-top: 2vh;
  }
`;

const EditBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: -18px;
  width: 80px;
  right: 13px;
  .delete-btn {
    margin: auto;
    z-index: 4;
    :hover {
      color: firebrick;
      cursor: pointer;
    }
  }
  .edit-btn {
    background-color: #005e63;
    width: 35px;
    height: 35px;
    z-index: 4;
    :hover {
      background-color: #068f64;
    }
  }
`;

const Note = (props) => {
  return (
    <NoteBox key={props.id}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <EditBox>
        <Fab
          color="secondary"
          aria-label="edit"
          className="edit-btn delete-btn"
          onClick={() => props.delete(props.id)}
        >
          <DeleteIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
          className="edit-btn"
          onClick={() => props.edit(props)}
        >
          <EditIcon className="icon-bg" />
        </Fab>
      </EditBox>
    </NoteBox>
  );
};

export default Note;
