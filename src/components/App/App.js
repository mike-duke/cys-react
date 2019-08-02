import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Aside } from '../Aside/Aside';
import { Header } from '../Header/Header';
import { TodoList } from '../TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <TodoList />
    </div>
  );
}

export default App;
