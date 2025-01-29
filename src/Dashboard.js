import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
