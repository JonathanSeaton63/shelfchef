import React from 'react';
import './App.css';
import './components/Jumbotron/Jumbotron.css'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <Jumbotron />
      <Login />
    </div>
  );
}

export default App;
