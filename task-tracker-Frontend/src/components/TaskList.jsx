import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const loadTasks = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/${projectId}`, { withCredentials: true });
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
      title,
      description,
      project: projectId
    }, { withCredentials: true });
    setTitle('');
    setDescription('');
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, [projectId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">Tasks</h3>
      <form onSubmit={addTask} className="space-y-2 mt-2">
        <input className="w-full border p-2" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="w-full border p-2" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2">Add Task</button>
      </form>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="border p-2">
            <strong>{task.title}</strong> - <em>{task.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
