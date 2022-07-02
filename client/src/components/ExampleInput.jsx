import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ExampleInput = ({handleInput, id}) => {
  const [input, setInput] = useState();
  console.log(id);
  return (
    <SpanContainer>
      <input onChange={(e) => setInput(() => e.target.value)}></input>
      <Button onClick={e => {e.preventDefault(); handleInput({id, input})}}>+</Button>
    </SpanContainer>
  );
};

export default ExampleInput;

const SpanContainer = styled.span`
  display: flex;
`;