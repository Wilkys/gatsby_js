import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

// const PROFILE_IMAGE_LINK = 'https://raw.githubusercontent.com/willy-kim/willy-kim.github.io/main/images/me.jpg';

const ProfileImage = ({ profileImage }) => {
  return (
    // <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />     
    <ProfileImageWrapper image={profileImage} alt="Profile Image" />
  );
};

export default ProfileImage;

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px){
    width: 80px;
    height: 80px;
  }
`;