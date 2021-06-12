import React from 'react';

function Food({ favourite }) {
  return <h1>i like {favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello dongdong</h1>
      <Food favourite="kimchi" />
      <Food favourite="natto" />
      <Food favourite="greensarada" />
      <Food favourite="yariika" />
      <Food favourite="iwashi" />
      <Food favourite="daigakuemo" />
    </div>
  );
}
export default App;
