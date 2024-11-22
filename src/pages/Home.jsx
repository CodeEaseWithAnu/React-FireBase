import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to User Management System
      </h1>
      <p className="text-gray-600 mb-8">
        Manage your account by signing up or logging in.
      </p>      
    </div>
  );
};

export default Home;
