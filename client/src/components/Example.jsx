import React from 'react';

const Example = ({example, id}) => (
  <div>
    {console.log(example, id)}
    <h5>{example[id + 1]}</h5>
  </div>
);
export default Example;