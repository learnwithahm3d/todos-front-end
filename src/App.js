import './App.css';
import { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get('/todos');
      setTodos(response.data);
    };
    loadTodos();
  }, []);
  const createTodo = todoText => {
    // Logic to create a new todo
  };
  
  const completeTodo = todoId => {
    // Logic to mark a todo as complete
  };
  const deleteTodo = todoId => {
    // Logic to delete a todo
  }
  return (
    <div>
      <h1>My Simple To-do App</h1>
      <NewTodoForm onClickCreate={createTodo} />
      <TodoList 
        todos={todos} 
        onClickComplete={completeTodo} 
        onClickDelete={deleteTodo} />

    </div>
  );
}

export default App;
