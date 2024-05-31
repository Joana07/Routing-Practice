import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
  const { number } = useParams(); 
  return (
    <div>
      <h1>The number is {number}: 4</h1>
    </div>
  );
};

export default Number;