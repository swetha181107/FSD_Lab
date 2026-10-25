
import { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    // Add a new task
    function addTask(e) {
        e.preventDefault();

        if (taskInput.trim() === '') {
            return;
        }

        const newTask = {
            id: Date.now(),
            text: taskInput.trim(),
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTaskInput('');
    }

    // Mark a task as completed or incomplete
    function toggleTask(id) {
        setTasks(
            tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    // Delete a task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <p className="subtitle">Organize your daily tasks</p>

            <form onSubmit={addTask} className="todo-form">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>

            <h2>My Tasks ({tasks.length})</h2>

            {tasks.length === 0 ? (
                <p className="empty-message">
                    No tasks yet. Add your first task!
                </p>
            ) : (
                <ul className="task-list">
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            <label className="task-label">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                />

                                <span
                                    className={
                                        task.completed ? 'completed' : ''
                                    }
                                >
                                    {task.text}
                                </span>
                            </label>

                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
