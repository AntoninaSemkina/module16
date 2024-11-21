import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, editTask } from "./store/Slices/taskSlice";
import { increment } from "./store/Slices/countSlice";

function App() {
  const [inputName, setInputName] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const count = useSelector((state) => state.count.count);

  const addTaskHandler = () => {
    const newTask = { id: count, name: inputName };
    setInputName("");
    dispatch(addTask(newTask));
    dispatch(increment());
  };

  const deleteTaskHandler = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const editTaskHandler = (taskId, newName) => {
    dispatch(editTask({ taskId, newName }));
    setEditTaskId(null);
    setEditTaskName("");
  };

  return (
    <div className="container">
      <div className="App">
        <input
          className="input"
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button className="addBtn" onClick={addTaskHandler}>
          Добавить задачу
        </button>
        {tasks.map((task) => (
          <div className="tasks" key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input
                  className="input"
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                />
                <button
                  className="saveBtn"
                  onClick={() => editTaskHandler(task.id, editTaskName)}
                >
                  Сохранить
                </button>
                <button
                  className="closeBtn"
                  onClick={() => setEditTaskId(null)}
                >
                  Отмена
                </button>
              </>
            ) : (
              <>
                {task.id} | {task.name}
                <button
                  className="editBtn"
                  onClick={() => {
                    setEditTaskId(task.id);
                    setEditTaskName(task.name);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => deleteTaskHandler(task.id)}
                >
                  Удалить
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
