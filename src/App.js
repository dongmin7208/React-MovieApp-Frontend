import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} /> */}
    </HashRouter>
  );
}
export default App;
