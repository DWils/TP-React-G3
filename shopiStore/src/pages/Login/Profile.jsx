<<<<<<< HEAD
// import "../../assets/css/profil.css";
=======
// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile
import "../../assets/css/profil.css"
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
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
<<<<<<< HEAD
    fetch('https://fakestoreapi.com/users/1', {
=======
    fetch('API_URL/profile', {
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
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
<<<<<<< HEAD
          <input className='input'
=======
          <input
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
            type="text"
            value={userInfo.username}
            onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
          />
<<<<<<< HEAD
          <input className='input'
=======
          <input
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
            type="email"
            value={userInfo.email}
            onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
          />
<<<<<<< HEAD
          <button className='button' onClick={handleSave}>Save</button>
=======
          <button onClick={handleSave}>Save</button>
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
        </div>
      ) : (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
<<<<<<< HEAD
          <button className='button' onClick={() => setEditing(true)}>Edit</button>
=======
          <button onClick={() => setEditing(true)}>Edit</button>
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> 16db8cbe575cc37bcd4ce02d2eff3071b4bfbf7b
