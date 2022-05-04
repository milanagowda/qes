import React from 'react';
import { useSelector } from 'react-redux';

const UpVote = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);

  return (
    <>
      {isLike ? (
        <span
          className="material-icons text-success"
          onClick={handleUnLike}
          style={{ filter: theme ? 'invert(1)' : 'invert(0)' }}
        >
          thumb_up_off_alt
        </span>
      ) : (
        <span className="material-icons" onClick={handleLike}>
          thumb_up_off_alt
        </span>
      )}
    </>
  );
};

export default UpVote;
