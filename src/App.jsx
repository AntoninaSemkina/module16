import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  removeTaskAction,
  editTaskAction,
} from "./store/taskReducer";
import { incrementAction } from "./store/countReducer";

function App() {
  const [inputName, setInputName] = useState();
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const count = useSelector((state) => state.count.count);

  const addTask = () => {
    const newTask = {
      id: count,
      name: inputName,
    };
    setInputName("");
    dispatch(addTaskAction(newTask));
    dispatch(incrementAction());
  };

  const deleteTask = (taskId) => {
    dispatch(removeTaskAction(taskId));
  };

  const editTask = (taskId, newName) => {
    dispatch(editTaskAction(taskId, newName));
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
        <button className="addBtn" onClick={addTask}>
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
                  onClick={() => editTask(task.id, editTaskName)}
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
                  className="deleteBtn"
                  onClick={() => deleteTask(task.id)}
                >
                  Удалить
                </button>
                <button
                  className="editBtn"
                  onClick={() => {
                    setEditTaskId(task.id);
                    setEditTaskName(task.name);
                  }}
                >
                  Редактировать
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
