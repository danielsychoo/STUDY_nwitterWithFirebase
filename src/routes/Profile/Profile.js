import React from 'react';
import { MyNweets, MyProfile } from 'components';

const Profile = () => {
  return (
    <div>
      <hr />
      <MyProfile />
      <hr />
      <MyNweets />
    </div>
  );
};

export default Profile;
