import React, { useState } from "react";
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");

  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <html>
      <body>
        <div class="main">
          <h1>Зробити:</h1>
          <div class="inp"><input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addTodo(input)}>Додати</button>
          </div>
          
          <ul>
            {list.map((todo) => (
              <li key={todo.id}>
                <div class="outp">{todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button></div>
              </li>
            ))}
          </ul>
          
        </div>
      </body>
    </html>
  );
}

export default App;
