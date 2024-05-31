import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const Word = () => {
  const { word } = useParams();

  if (!isNaN(word)) {
    return <Navigate to={`/${word}`} replace />;
  }

  return (
    <div>
      <h1>The word is: {word}hello</h1>
    </div>
  );
};

export default Word;
