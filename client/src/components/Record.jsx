import React, { useState, useEffect } from 'react';
import { useData } from '../Context';
import Example from './Example';

export default function Record({ name, totalTime, difficulty, promptLink }) {

  return (
    <div>
      <h2>{name}</h2>
      <h4>Difficulty: {difficulty} | Total time: {totalTime}</h4>
      <p>{promptLink}</p>
    </div>
  );
};
