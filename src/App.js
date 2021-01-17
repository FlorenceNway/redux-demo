import React from 'react';
import './App.css';
import RegisterUserInput from './components/RegisterUserInput';
import RegisterUserList from './components/RegisterUserList';

const App = () => {
  return (
    <div>
      <RegisterUserInput/>
      <RegisterUserList/>
    </div>
  );
}

export default App;
