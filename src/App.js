import React, { useState } from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <Navbar onClick={getUsers} />
      {loading && <div className="loader" />}
      <div className="user-card-container">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
