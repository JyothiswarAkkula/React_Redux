import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcomments } from './Redux/commentsslice';

const CommentForm = () => {
  const [userComment, setUserComment] = useState('');

  const dispatch= useDispatch();

  const commentHandler = (e) => {
    setUserComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addcomments(userComment))
    setUserComment('')
  };

  return (
    <div>
      <form className='formSection' onSubmit={submitHandler}>
        <h4>Leave your comment</h4>
        <div className="commentInput">
          <textarea
            value={userComment}
            onChange={commentHandler}
            cols="50"
            rows="4"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
