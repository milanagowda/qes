import React from 'react';
import { useSelector } from 'react-redux';

const DownVote = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);

  return (
    <>
      {isLike ? (
        <span
          className="material-icons text-danger"
          onClick={handleUnLike}
          style={{ filter: theme ? 'invert(1)' : 'invert(0)' }}
        >
          thumb_down_off_alt
        </span>
      ) : (
        <span className="material-icons" onClick={handleLike}>
          thumb_down_off_alt
        </span>
      )}
    </>
  );
};

export default DownVote;
