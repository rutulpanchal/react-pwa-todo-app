import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Todo></Todo>
    </div>
  );
}

export default App;
