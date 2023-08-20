import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <p>{`${user.first_name} ${user.last_name}`}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
