import React from 'react';
import ReactDOM from 'react-dom/client';

function Greetings(){
  return <h2>Hello im first component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings />);


