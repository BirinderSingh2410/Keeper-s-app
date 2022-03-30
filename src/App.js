import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AddNewNote from "./components/AddNewNote/AddNewNote";
import Note from "./components/Note/Note";
import styled from "styled-components";
import EditNote from "./components/EditNote/EditNote";

const NoteFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const dArray = [
  { title: "1st", desc: "1st desc " },
  { title: "2nd", desc: "2nd desc" },
  { title: "3rd", desc: "3rd desc" },
  { title: "4th", desc: "4th desc" },
  { title: "5th", desc: "5th desc" },
];

const App = () => {
  const [dataArray, setDataArray] = useState(dArray);
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [editnote, setEditNote] = useState(false);
  const [editnoteid,setEditId] = useState(0);

  function noteChange(datatitle, datadesc) {
    setDataDescription(datadesc);
    setDataTitle(datatitle);
  }

  function addNote(title, desc) {
    if (dataDescription !== "" || dataTitle !== "") {
      const newArray = [
        { title: dataTitle, desc: dataDescription },
        ...dataArray,
      ];
      setDataArray(newArray);
    }
  }

  function deleteNote(data) {
    const newArray = dataArray.filter((i, index) => {
      return index !== data;
    });
    setDataArray(newArray);
  }

  function editNote(data) {
    setEditNote(true);
    setEditId(data.id)
  }

  function editedNote(title,description){
    console.log(dataArray)
    const newArray = dataArray.filter((i, index) => {
      if(index === editnoteid){
        if(title !== "") dataArray[index].title = title;
        if(description !== "")dataArray[index].desc=description;
      }
      return dataArray[index];
    });
    setDataArray(newArray);
  }

  return (
    <div>
      <Header />
      <div style={{ textAlign: "-webkit-center" }}>
        <AddNewNote onclick={noteChange} clickcapture={addNote} />
      </div>
      <NoteFlex>
        {editnote ? <EditNote clickCapture={editedNote} setEditNote={setEditNote}/> : null}
        {dataArray.map((i, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={i.title}
              desc={i.desc}
              delete={deleteNote}
              edit={editNote}
            />
          );
        })}
      </NoteFlex>
    </div>
  );
};

export default App;
