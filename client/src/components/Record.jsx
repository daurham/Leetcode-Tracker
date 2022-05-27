import React, { useState, useEffect } from 'react';
import { useData } from '../Context';
import Example from './Example';

export default function Record({ name, prompt, examples}) {
  console.log('name: ', name);
  console.log('prompt: ', prompt);
  console.log('examples: ', examples);
  return (
    <div>
      <h1>{name}</h1>
      {/* <h4>{prompt}</h4> */}
      {examples.length === 0 ? null : examples.map((ex, index) => (<Example key={index} id={index} example={ex}/>))}
    </div>
  );
};
