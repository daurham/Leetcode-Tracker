import React, { useEffect, useState } from "react";
import { useData } from "../Context";
import Record from "./Record";
import Form from "./Form";

export default function App() {
  const { stats, setStats, getData } = useData(); 
  console.log(stats);
  const handleData = () => getData(); // console.log('click: ', stats);

  useEffect(() => {console.log('rerendering')}, [stats])
  return (
    <div>
      <h1>Leetcode Tracker</h1>
      {/* <h3>{JSON.stringify(stats)}</h3> */}
      <button onClick={handleData} >getData</button>
        <Form />    
        {!stats ? console.log('nostats') : stats.map(rec => <Record index={rec.id} examples={rec.examples} name={rec.name} prompt={rec.prompt} />)}
        {/* {!stats ? console.log('nostats') : <Record index={stats[0].id} examples={stats[0].examples} name={stats[0].name} prompt={stats[0].prompt} />} */}
    </div>
  );
};