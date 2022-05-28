import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useData } from '../Context';
import ExampleInput from './ExampleInput';

const Form = () => {
  const [name, setInputName] = useState();
  const [difficulty, setInputDifficulty] = useState();
  const [totalTime, setInputTotalTime] = useState();
  const [prompt, setInputPrompt] = useState();
  const [promptLink, setInputPromptLink] = useState();
  const [promptCode, setInputPromptCode] = useState();
  const [solution, setInputSolution] = useState();
  const [readTime, setInputReadTime] = useState();
  const [whiteboardTime, setInputWhiteboardTime] = useState();
  const [pseudoCodeTime, setInputPseudoCodeTime] = useState();
  const [codeTime, setInputCodeTime] = useState();
  const [constraints, setInputConstraints] = useState();
  const [examples, setInputExamples] = useState([]);
  const [exNum, setExNum] = useState([]);
  const [custom, toggleCustom] = useState(false)
  const { getData } = useData();

  useEffect(() => {}, [name, difficulty, custom, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples])
  const handleRecordLog = (e) => {
    e.preventDefault();
    if (name === undefined || totalTime === undefined || difficulty === undefined) return;
    let data = { name, difficulty, custom, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples }
    console.log(data);
    axios.post('/track/', data)
      .then(() => getData())
      .catch(console.log);
  };

  const handleExInput = (data) => setInputExamples(() => [...examples, data]);

  return (
    <div>
      <form>
        <input placeholder="Name*" onChange={(e => setInputName(() => e.target.value))}></input>
        <input placeholder="Difficulty*" onChange={(e => setInputDifficulty(() => e.target.value))}></input>
        <input placeholder="PromptLink" onChange={(e => setInputPromptLink(() => e.target.value))}></input>
        <input placeholder="TotalTime*" onChange={(e => setInputTotalTime(() => e.target.value))}></input>
        {!custom ? null :
          <>
            <input placeholder="Prompt" onChange={(e => setInputPrompt(() => e.target.value))}></input>
            <input placeholder="PromptCode" onChange={(e => setInputPromptCode(() => e.target.value))}></input>
            <input placeholder="Solution" onChange={(e => setInputSolution(() => e.target.value))}></input>
            <input placeholder="ReadTime" onChange={(e => setInputReadTime(() => e.target.value))}></input>
            <input placeholder="WhiteboardTime" onChange={(e => setInputWhiteboardTime(() => e.target.value))}></input>
            <input placeholder="PseudoCodeTime" onChange={(e => setInputPseudoCodeTime(() => e.target.value))}></input>
            <input placeholder="CodeTime" onChange={(e => setInputCodeTime(() => e.target.value))}></input>
            <input placeholder="Constraints" onChange={(e => setInputConstraints(() => e.target.value))}></input>
            <button onClick={e => { e.preventDefault(); setExNum(() => [...exNum, 1]) }}>Add Examples</button>
            {exNum.length === 0 ? null : exNum.map((index) => <ExampleInput handleInput={handleExInput} key={index} />)}
          </>
        }
      </form>
      <button onClick={e => { e.preventDefault(); toggleCustom(() => !custom) }}>Custom: {custom?'true':'false'}</button>
      <button onClick={handleRecordLog}>Log Record</button>
    </div>
  );
};

export default Form; 