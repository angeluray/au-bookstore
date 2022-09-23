import React from 'react';
import profilepicture from '../images/profilepicture.png';

export default function profileIcon() {
  return (
    <div className="social-container">
      <img src={profilepicture} alt="Profile icon" />
    </div>
  );
}
