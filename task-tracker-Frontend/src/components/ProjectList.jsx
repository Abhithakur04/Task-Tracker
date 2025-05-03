import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const loadProjects = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects`, { withCredentials: true });
    setProjects(res.data);
  };

  const addProject = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/projects`, { name: projectName }, { withCredentials: true });
    setProjectName('');
    loadProjects();
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <form onSubmit={addProject} className="mb-4 space-y-2">
        <input
          className="w-full border p-2"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="New Project Name"
        />
        <button className="bg-blue-500 text-white px-4 py-2">Add Project</button>
      </form>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project._id}
            className="border p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedProject(project._id)}
          >
            {project.name}
          </li>
        ))}
      </ul>
      {selectedProject && <TaskList projectId={selectedProject} />}
    </div>
  );
};

export default ProjectList;
