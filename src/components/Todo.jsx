import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Edit, Trash } from "react-feather";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const editValue = todos.find((todo) => {
      return todo.id == edit;
    });
    if (edit && editValue) {
      const updatedtodo = todos.map((t) => {
        return t.id == edit
          ? (t = { id: t.id, todo: input })
          : { id: t.id, todo: t.todo };
      });
      setEdit(null);
      setTodos(updatedtodo);
      setInput("");
      return;
    }

    if (input != "") {
      setTodos([...todos, { id: uuidv4(), todo: input }]);
      setInput("");
    }
  };
  const handleDelete = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const handleEdit = (id) => {
    setEdit(id);
    const editValue = todos.find((todo) => {
      return todo.id == id;
    });
    setInput(editValue.todo);
  };
  return (
    <div className="flex justify-center items-center bg-slate-600 flex-col">
      <h1 className="text-white font-extrabold m-4">To Do List</h1>
      <form onSubmit={onSubmit} className=" flex gap-1 m-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" outline-none p-1 "
        />
        <button
          type="submit"
          className="border-2 text-white bg-blue-600 min-w-10"
        >
          {" "}
          {edit ? "Edit" : "Add"}{" "}
        </button>
      </form>
      <ul className="text-white ">
        {todos.map((todo) => {
          return (
            <li
              className="  flex items-center w-full bg-red-500 m-2 p-1"
              key={todo.id}
            >
              <span className="text-xl flex-1 w-64 m-2">{todo.todo}</span>{" "}
              <button onClick={() => handleEdit(todo.id)}>
                <Edit />
              </button>{" "}
              <button onClick={() => handleDelete(todo.id)}>
                {" "}
                <Trash />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
