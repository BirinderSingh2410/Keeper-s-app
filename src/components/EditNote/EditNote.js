import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ColorPick } from "../AddNewNote/AddNewNote";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { editClick, editNote } from "../../Features/NoteData";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { SwatchesPicker } from "react-color";
import Tooltip from "@mui/material/Tooltip";
import { useMutation } from "@apollo/client";
import { UPDATE_DATA } from "../../Queries/Queries";
import { useSelect } from "@mui/base";

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
  justify-content: space-evenly;
  background-color: white;
  align-items: center;
  .input {
    width: 90%;
  }
  .title {
    height: 30%;
    font-size: 2.8em;
    font-weight: 600;
  }
  .close-btn {
    margin-left: 85%;
    :hover {
      cursor: pointer;
      color: firebrick;
    }
  }
  .desc {
    font-size: 1.5em;
  }
  .save-btn {
    background-color: #005e63;
    :hover {
      background-color: #068f64;
    }
  }
`;
const EventsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 520px) {
    width: 70%;
  }
`;
const ariaLabel = { "aria-label": "description" };

const EditNote = () => {
  const [newtitle, setTitle] = useState("");
  const [newdescription, setDescription] = useState("");
  const [newcolor, setColor] = useState("");
  const [click, setClick] = useState(false);

  const noteId = useSelector((state) => state.notes.editId);
  const Array = useSelector((state) => state.notes.value);
  const dispatch = useDispatch();

  const [updatenote] = useMutation(UPDATE_DATA);

  function editedNoteData() {
    var title = Array[noteId].title;
    var description = Array[noteId].description;
    var color = Array[noteId].color;

    if (newcolor !== "") {
      color = newcolor;
    }
    if (newtitle !== "") {
      title = newtitle;
    }
    if (newdescription !== "") {
      description = newdescription;
    }

    dispatch(
      editNote({ title: title, description: description, color: color })
    );

    updatenote({
      variables: {
        id: noteId,
        title: title,
        description: description,
        color: color,
      },
    });
    dispatch(editClick());
  }

  return (
    <EditNoteBox>
      <EditPopUp style={{ backgroundColor: newcolor }}>
        <CloseIcon
          className="close-btn"
          onClick={() => dispatch(editClick())}
        />
        <Input
          placeholder="Title"
          className="input title"
          inputProps={ariaLabel}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          className="input desc"
          inputProps={ariaLabel}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <EventsBlock>
          {click ? (
            <ColorPick>
              <IconButton onClick={() => setClick(false)}>
                <CloseIcon />
              </IconButton>
              <SwatchesPicker
                className="color-picker"
                onChange={(e) => setColor(e.hex)}
              />
            </ColorPick>
          ) : (
            <Tooltip title="Pick Color">
              <IconButton onClick={() => setClick(true)}>
                <ColorLensIcon />
              </IconButton>
            </Tooltip>
          )}

          <Button
            variant="contained"
            className="save-btn"
            onClick={editedNoteData}
          >
            Save
          </Button>
        </EventsBlock>
      </EditPopUp>
      <TransparentBg />
    </EditNoteBox>
  );
};

export default EditNote;
