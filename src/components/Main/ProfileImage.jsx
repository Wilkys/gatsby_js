import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// const PROFILE_IMAGE_LINK = 'https://raw.githubusercontent.com/willy-kim/willy-kim.github.io/main/images/me.jpg';

const ProfileImage = ({ profileImage }) => {
  return (
    // <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />     
    <ProfileImageWrapper fluid={profileImage} alt="Profile Image" />
  );
};

export default ProfileImage;

const ProfileImageWrapper = styled(Img)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px){
    width: 80px;
    height: 80px;
  }
`;