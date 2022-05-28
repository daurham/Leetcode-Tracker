import React, { useEffect, useState } from "react";
import { useData } from "../Context";
import Record from "./Record";
import Form from "./Form";

export default function App() {
  const { stats, getData } = useData(); 
  const handleData = () => getData();

  useEffect(() => {}, [stats])
  return (
    <div>
      <h1>Leetcode Tracker</h1>
      <button onClick={handleData}>getData</button>
        <Form />    
        {!stats ? null : stats.map((rec, index) => <Record key={index} promptLink={rec.promptLink} name={rec.name} difficulty={rec.difficulty} totalTime={rec.totalTime} />)}
    </div>
  );
};