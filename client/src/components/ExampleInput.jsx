import React, { useState } from 'react';

const ExampleInput = ({handleInput, id}) => {
  const [input, setInput] = useState();
  return (
    <div>
      <input onChange={(e) => setInput(() => e.target.value)}></input>
      <button onClick={e => {e.preventDefault(); handleInput({id, input})}}>+</button>
    </div>
  );
};

export default ExampleInput;