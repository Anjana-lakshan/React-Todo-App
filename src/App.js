import React, { useState } from 'react';
import './App.css';
//Importing Components

import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div className="App">
        <header>
            <h1> Anjana's Todo List</h1>
        </header>
        <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText} />
        <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
