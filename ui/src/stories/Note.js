import React from 'react';

import './note.css';

export const Note = ({ content }) => {
  return (
    <div className="note">
      <hr className="separator separator--light" />

      <p>{content}</p>

      <hr className="separator separator--bold" />
    </div>
  );
};
