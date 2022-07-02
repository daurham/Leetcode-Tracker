import axios from 'axios';
import React, { useId, useState, useEffect } from 'react';
import { useData } from '../Context';
import ExampleInput from './ExampleInput';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { range } from './utils';

const Form = () => {
  const [name, setInputName] = useState();
  const [difficulty, setInputDifficulty] = useState('N/A');
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
  const [ID, setID] = useState(0)
  const { getData } = useData();

  useEffect(() => setID(() => range(0, exNum.length).length), [exNum]);
  useEffect(() => { }, [name, difficulty, custom, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples])

  const handleRecordLog = (e) => {
    e.preventDefault();
    if (name === undefined || totalTime === undefined || difficulty === undefined) return;
    let data = { name, difficulty, custom, prompt, promptLink, promptCode, solution, readTime, whiteboardTime, pseudoCodeTime, codeTime, totalTime, constraints, examples }
    axios.post('/track/', data)
      .then(() => getData())
      .catch(console.error);
  };

  const handleExInput = (data) => setInputExamples(() => [...examples, data]);

  return (
    <LeetcodeInputForm>
      <form>
        <SpanContainer>
          <PriorityUserSelect  onChange={(e => setInputDifficulty(() => e.target.value))}>{['N/A', 1, 2, 3].map((v, index) => <option key={index} value={v}>{v}</option>)}</PriorityUserSelect>
          <DifficultyText>Difficulty Level</DifficultyText>
        </SpanContainer>
        <PriorityUserInput placeholder="Name*" onChange={(e => setInputName(() => e.target.value))}></PriorityUserInput>
        <PriorityUserInput placeholder="TotalTime*" onChange={(e => setInputTotalTime(() => e.target.value))}></PriorityUserInput>
        <PriorityUserInput placeholder="PromptLink" onChange={(e => setInputPromptLink(() => e.target.value))}></PriorityUserInput>
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
            <Button variant="outline-info" onClick={e => { e.preventDefault(); setExNum(() => [...exNum, ID]) }}>Add Examples</Button>
            {exNum.length === 0 ? null : exNum.map((index) => <ExampleInput handleInput={handleExInput} key={index} id={index} />)}
          </>
        }
      </form>
      <Button variant="outline-primary" onClick={e => { e.preventDefault(); toggleCustom(() => !custom) }}>Custom: {custom ? 'true' : 'false'}</Button>
      <Button variant="success" onClick={handleRecordLog}>Log Record</Button>
      <br />
    </LeetcodeInputForm>
  );
};

export default Form;

const LeetcodeInputForm = styled.div`
  display: table-caption;
`;
const PriorityUserInput = styled.input`
  border: 2px solid yellow;
`;
const PriorityUserSelect = styled.select`
  border: 2px solid yellow;
`;
const SpanContainer = styled.span`
  display: flex;
`;
const DifficultyText = styled.span`
  margin-left: 1rem;
`;