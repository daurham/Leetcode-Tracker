import React, { useEffect, useState } from "react";
import { useData } from "../Context";
import Record from "./Record";
import Form from "./Form";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

export default function App() {
  const { stats, getData } = useData();
  const handleData = () => getData();
  /* STRETCHED GOAL:
  Create a helper for getting the average of all the Stat Objs.
      // IF The current records name matches, sum up all their time and set avg as the time to show on Record.jsx
   */
  useEffect(() => { if (!stats) getData() }, [stats])
  return (
    <AppContainer>
      <AppHeader>Leetcode Tracker</AppHeader>
      <hr />
      <AppContentContainer>
        {/* <Button variant="outline-info" onClick={handleData}>Load Records</Button> */}
        <br />
        <Form />
        <br />
        {!stats ? null : stats.sort((a, b) => a.name.localeCompare(b.name)).map((rec, index) => (
          <Record
            key={index}
            promptLink={rec.promptLink}
            name={rec.name}
            difficulty={rec.difficulty}
            totalTime={rec.totalTime}
            id={rec._id}
          />))}
      </AppContentContainer>
    </AppContainer>
  );
};
 
const AppContainer = styled.div`
  width: 50%;
  margin: 20px;
`;
const AppHeader = styled.h1`
  width: 100%;
  margin: 20px;
`;
const AppContentContainer = styled.div`
  width: 50%;
  margin: 20px;
`;