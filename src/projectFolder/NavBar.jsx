import React from 'react';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const updatedLikes =useSelector((state)=>state.counter.value)
  const userCount = useSelector((state) => state.newsubsciber.users)
  const commentcount = useSelector((state)=>state.adddcomments.comments);
  // const commentCount = [];

  return (
    <div className='navSection'>
      <div className="navTitle">
        React
      </div>
      <div className="navUser">
        Subscribers: {userCount.length}
      </div>
      <div className="navComments">
        Comments: {commentcount.length}
      </div>
      <div className="navLikes">
        Likes: {updatedLikes}
      </div>
    </div>
  );
};

export default NavBar;
