import React from 'react';

const Note = ({ content }) => {
  return (
    <div className="note">
      <hr className="separator separator--light" />

      <p>{content}</p>

      <hr className="separator separator--bold" />
    </div>
  );
};

export default Note;
