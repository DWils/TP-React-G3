// import "../../assets/css/profil.css";
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch user info from the API when the component mounts
    fetch('API_URL/profile')
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error('Error fetching user info:', error));
  }, []);

  const handleSave = () => {
    // Send updated user info to the API
    fetch('https://fakestoreapi.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
        setEditing(false);
      })
      .catch(error => console.error('Error updating user info:', error));
  };

  return (
    <div>
      <h1 className="qq">Profile</h1>
      {editing ? (
        <div>
          <input className='input'
            type="text"
            value={userInfo.username}
            onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
          />
          <input className='input'
            type="email"
            value={userInfo.email}
            onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <button className='button' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <button className='button' onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
