import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useData } from '../Context';

const Form = () => {
  const [name, setInputName] = useState();
  const [prompt, setInputPrompt] = useState();
  const [promptLink, setInputPromptLink] = useState();
  const [promptCode, setInputPromptCode] = useState();
  const [solution, setInputSolution] = useState();
  const [readTime, setInputReadTime] = useState();
  const [whiteboardTime, setInputWhiteboardTime] = useState();
  const [pseudoCodeTime, setInputPseudoCodeTime] = useState();
  const [codeTime, setInputCodeTime] = useState();
  const [totalTime, setInputTotalTime] = useState();
  const [constraints, setInputConstraints] = useState();
  const [examples, setInputExamples] = useState();
  const { getData } = useData();
  useEffect(() => {
  }, [name, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples])
  const handleRecordLog = () => {
    let data = { name, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples }
    console.log(data);
    axios.post('/track/', data)
      .then(() => getData())
      .catch(console.log);
  };

  return (
    <form>
      <input placeholder="Name" onChange={(e => setInputName(() => e.target.value))}></input>
      <input placeholder="Prompt" onChange={(e => setInputPrompt(() => e.target.value))}></input>
      <input placeholder="PromptLink" onChange={(e => setInputPromptLink(() => e.target.value))}></input>
      <input placeholder="PromptCode" onChange={(e => setInputPromptCode(() => e.target.value))}></input>
      <input placeholder="Solution" onChange={(e => setInputSolution(() => e.target.value))}></input>
      <input placeholder="ReadTime" onChange={(e => setInputReadTime(() => e.target.value))}></input>
      <input placeholder="WhiteboardTime" onChange={(e => setInputWhiteboardTime(() => e.target.value))}></input>
      <input placeholder="PseudoCodeTime" onChange={(e => setInputPseudoCodeTime(() => e.target.value))}></input>
      <input placeholder="CodeTime" onChange={(e => setInputCodeTime(() => e.target.value))}></input>
      <input placeholder="TotalTime" onChange={(e => setInputTotalTime(() => e.target.value))}></input>
      <input placeholder="Constraints" onChange={(e => setInputConstraints(() => e.target.value))}></input>
      <input placeholder="Examples" onChange={(e => setInputExamples(() => e.target.value))}></input>
      <button onClick={handleRecordLog}>Log Record</button>
    </form>
  );
};

export default Form; 