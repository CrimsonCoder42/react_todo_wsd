import React, { useEffect, useState } from 'react'
import "./styles.css"
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("ITEMS")
    if (savedTodos) {
      return JSON.parse(savedTodos)
      } else {
        return []
        }
  }
  )
  
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ]
    })
    
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          }
        }
        return todo
      })
    })
  }

  function deleteTodo (id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  return (
    <>
    <NewTodoForm addTodo={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
    
    
  )
}

export default App
