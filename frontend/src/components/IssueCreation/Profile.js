import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <div>
      <ProfileImage />
    </div>
  );
};

const ProfileImage = styled.div`
  border: 1px solid black;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-color: black;
  border-radius: 50%;
`;

export default Profile;
