import React, {useState} from "react";
import './App.css';

import Form from './components/Form';
import List from './components/List';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Productivity Planner!</h1>
    </header>
    <Form inputText = {inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <List todos={todos}/>
    </div>
  );
}

export default App;
