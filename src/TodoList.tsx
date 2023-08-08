import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No todos yet!</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo} 
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          />
        )
      })}
      </ul>
  )
}

export default TodoList