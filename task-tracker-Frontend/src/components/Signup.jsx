import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', country: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, form);
      navigate('/login');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <h2 className="text-xl font-bold">Signup</h2>
      <input className="w-full border p-2" name="name" placeholder="Name" onChange={handleChange} />
      <input className="w-full border p-2" name="email" placeholder="Email" onChange={handleChange} />
      <input className="w-full border p-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input className="w-full border p-2" name="country" placeholder="Country" onChange={handleChange} />
      <button className="bg-green-500 text-white px-4 py-2" type="submit">Signup</button>
    </form>
  );
};

export default Signup;
