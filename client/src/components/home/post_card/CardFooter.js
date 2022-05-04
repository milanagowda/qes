import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  likePost,
  unLikePost,
  savePost,
  unSavePost,
  downVote,
  unDownVote,
} from '../../../redux/actions/postAction';
import ShareModal from '../../ShareModal';
import { BASE_URL } from '../../../utils/config';
import UpVote from '../../UpVote';
import DownVote from '../../DownVote';

const CardFooter = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setDisIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  const [isShare, setIsShare] = useState(false);

  const { auth, theme, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [saved, setSaved] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);

  // Likes
  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(likePost({ post, auth, socket }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(unLikePost({ post, auth, socket }));
    setLoadLike(false);
  };

  // downvote
  const handleDisLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(downVote({ post, auth, socket }));
    setLoadLike(false);
  };

  const handleDisUnLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(unDownVote({ post, auth, socket }));
    setLoadLike(false);
  };

  // Saved
  useEffect(() => {
    if (auth.user.saved.find((id) => id === post._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [auth.user.saved, post._id]);

  const handleSavePost = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    await dispatch(savePost({ post, auth }));
    setSaveLoad(false);
  };

  const handleUnSavePost = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    await dispatch(unSavePost({ post, auth }));
    setSaveLoad(false);
  };

  return (
    <div className="card_footer">
      <div className="card_icon_menu">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1rem',
          }}
        >
          {post.likes.length}
          <UpVote
            isLike={isLike}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
          />

          {post.dislikes.length}
          <DownVote
            isDisLike={isDisLike}
            handleLike={handleDisLike}
            handleUnLike={handleDisUnLike}
          />

          <Link to={`/post/${post._id}`} className="text-dark">
            <span className="material-icons mt-2">edit_note</span>
          </Link>

          <span
            className="material-icons text-primary"
            onClick={() => setIsShare(!isShare)}
          >
            share
          </span>
        </div>

        {saved ? (
          <span
            className="material-icons text-danger"
            onClick={handleUnSavePost}
          >
            favorite
          </span>
        ) : (
          <span className="material-icons" onClick={handleSavePost}>
            favorite_border
          </span>
        )}
      </div>

      <h6 style={{ padding: '0 25px', cursor: 'pointer' }}>
        {post.comments.length} answers
      </h6>

      {isShare && (
        <ShareModal url={`${BASE_URL}/post/${post._id}`} theme={theme} />
      )}
    </div>
  );
};

export default CardFooter;
