import { ChangeEvent, useState } from 'react';
import { TodoList } from './components/Interface';
import ListTodo from './components/ListTodo';

const App = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<TodoList[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    const newTodo = {
      todo: todo
    }
    setTodoList([...todoList, newTodo])
    setTodo("")
  }

  const deleteTodo = (todoDelete: string): void => {
    setTodoList(
      todoList.filter((data) => {
        return data.todo !== todoDelete
      })
    )
  }

  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      <form>
        <input 
          value = {todo}
          onChange = {handleChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      {todoList.map((todo: TodoList, key: number) => (
        <ListTodo 
          todo = {todo}
          key = {key}
          deleteTodo = {deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
