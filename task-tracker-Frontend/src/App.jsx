import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ProjectList from './components/ProjectList';
import Header from './components/Header';


const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-4">
        <Outlet /> 
      </div>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'projects', element: <ProjectList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
