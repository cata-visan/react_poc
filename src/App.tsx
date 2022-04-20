import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './pages/poc/components/ExpenseItem';

function App() {
  return (
   <div>
     <h1>Learn React</h1>
     <ExpenseItem title="Ferobol Insurance" date="Today" amount="800 de lei mai mult ca anul trecut fml" />
     <ExpenseItem title="Title 2"/>
    </div>
  )    
}

export default App;
