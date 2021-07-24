import { TodoList } from "./Interface"

interface Props {
  todo: TodoList,
  deleteTodo(todoDelete: string): void
}

const ListTodo = ({ todo, deleteTodo }: Props) => {
  return (
    <div>
      <h1>
        {todo.todo}
      </h1>
      <button 
        type="submit" 
        onClick={() => {
          deleteTodo(todo.todo)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default ListTodo
