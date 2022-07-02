import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from '../Context';
import Example from './Example';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export default function Record({ name, totalTime, difficulty, promptLink, id }) {
  const { getData } = useData();
  const handleDelete = () => axios.delete(`/track/${id}`).then(getData).catch(console.error);
  return (
    <RecordContainer>
      <RecordSpan>
      <h4>{name}</h4>
        <Button className="btn-sm" style={{marginLeft: ".5rem", height: "4vh"}} variant="danger" onClick={handleDelete}>x</Button>
      </RecordSpan>
      <RecordDetails>
      <h6>Difficulty: {difficulty} | Total time: {totalTime}</h6>
      <RecordSpan>
        {!promptLink ?
          null
          :
          <RecordAnchor href={promptLink}>Prompt Link</RecordAnchor>}
      </RecordSpan>
          </RecordDetails>
      <br />
    </RecordContainer>
  );
};

const RecordContainer = styled.div`
  
`;
const RecordDetails = styled.div`
  margin-left: 10px
`;
const RecordSpan = styled.span`
  display: flex;
`;

const RecordAnchor = styled.a`
  margin-right: 5rem;
`;