import React, { useState } from "react";
import Header from "../Header/Header";
import AddNewNote from "../AddNewNote/AddNewNote";
import Note from "../Note/Note";
import styled from "styled-components";
import EditNote from "../EditNote/EditNote";
import { useSelector, useDispatch } from "react-redux";
import { getNotes, setCompeleteAray } from "../../Reducer/NoteData";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA, GET_ID_DATA } from "../../Queries/Queries";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingBg from "../../asset/images/Capture.PNG";

const NoteFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LoggedIn = styled.h2`
  font-weight: 400;
  font-size: 0.8em;
  margin-top: 44px;
  margin-right: 10px;
  margin-left: 83%;
`;
const LoadingBox = styled.div`
  background-image: url(${LoadingBg});

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: -webkit-center;

  .loading-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 230px;
    align-items: center;
    justify-content: space-between;
    padding-top: 20%;

    .loading-heading {
      font-weight: 200;
      color: white;
      font-size: 3em;
    }

    p {
      color: white;
      font-size: 30px;
      font-weight: 100;
      margin-top: 50px;
    }
  }
`;

const MainComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const Array = useSelector((state) => state.notes.array);
  const editKey = useSelector((state) => state.notes.editKey);
  const dispatch = useDispatch();
  const gmailId = useSelector((state) => state.notes.userID);
  const name = useSelector((state) => state.notes.name);

  const allData = useQuery(GET_ALL_DATA);
  if (!allData.loading) {
    setTimeout(() => {
      dispatch(getNotes(allData.data.notes_data));
    }, 500);
  }

  const { data, loading, error } = useQuery(GET_ID_DATA, {
    variables: { gmailId: gmailId },
  });
  if (loading) {
    document.body.style.overflow = "hidden";
    return (
      <LoadingBox>
        <div className="loading-content">
          <h1 className="loading-heading">Hi {name}!</h1>
          <p>Please wait</p>
          <CircularProgress className="circular-loading" />
        </div>
      </LoadingBox>
    );
  }
  if (error) {
    console.log(error);
  }
  if (!trigger) {
    dispatch(setCompeleteAray(data.notes_data));
    setTrigger(true);
  }
  document.body.style.overflow = "";
  return (
    <div style={{ paddingBottom: "6vh" }}>
      <Header />
      <div style={{ textAlign: "-webkit-center" }}>
        <AddNewNote />
      </div>
      <NoteFlex>
        {editKey ? <EditNote /> : null}
        {Array.map((i, index) => {
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
      <LoggedIn>Logged In as {name}!</LoggedIn>
    </div>
  );
};

export default MainComponent;
