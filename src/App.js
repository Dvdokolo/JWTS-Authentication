import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute() {
  const token = localStorage.getItem('token');
  return token ? <Dashboard /> : <Navigate to="/" />;
}

export default App;
