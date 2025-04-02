// src/App.jsx

import Profile from './Profile';
import userData from './userData.json'
import friends from './friends.json'
import FriedList from './FriendList';

export default function App() {
  return (
    <>
      <Profile
      name = {userData.username}
      tag = {userData.tag}
      location = {userData.location}
      stats = {userData.stats}
      image = {userData.avatar}
      />
      <FriedList friends={friends}
      />
    </>
  )
}
