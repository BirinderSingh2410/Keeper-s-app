import React from "react";
import Header from "./components/Header/Header";
import AddNewNote from "./components/AddNewNote/AddNewNote";
import Note from "./components/Note/Note";
import styled from "styled-components";
import EditNote from "./components/EditNote/EditNote";
import { useSelector } from "react-redux";

const NoteFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const Array = useSelector((state) => state.notes.value); //state form the store "notes" is in store and ".values" in the slice
  const editKey = useSelector((state) => state.notes.editKey);

  return (
    <div>
      <Header />
      <div style={{ textAlign: "-webkit-center" }}>
        <AddNewNote />
      </div>
      <NoteFlex>
        {editKey ? <EditNote /> : null}
        {Array.map((i, index) => {
          return (
            <Note
              key={index}
              id={index}
              color={i.color}
              title={i.title}
              desc={i.desc}
            />
          );
        })}
      </NoteFlex>
    </div>
  );
};

export default App;
