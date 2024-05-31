import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const StyledWord = () => {
  const { word, color, background } = useParams();
  
  if (!isNaN(word)) {
    return <Navigate to={`/${word}`} replace />;
  }
  const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  width: '100%',
  
};
  const textStyle = {
    color: color,
    backgroundColor: background,
    borderRadius: '10px',
    padding: '20px ',
  };


  return (
    <div style={pageStyle}>
    <div style={textStyle}>
      <h1>The word is: {word}</h1>
    </div>
    </div>
  );
};

export default StyledWord;

