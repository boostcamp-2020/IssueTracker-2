import React, { useState } from 'react';
import styled from 'styled-components';

const Profile = ({ profile }) => {
  return (
    <div>
      <ProfileImage src={profile} />
    </div>
  );
};

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-color: black;
  border-radius: 50%;
`;

export default Profile;
