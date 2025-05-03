// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password }, { withCredentials: true });
      navigate('/projects');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input className="w-full border p-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border p-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
    </form>
  );
};

export default Login;
