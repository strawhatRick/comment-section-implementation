import React, { useState } from 'react';
import Comment from './components/Comment';
import Post from './components/Post';

const postId = 1;
const authorId = 1001;
let key = 0;

const App = () => {
  const [commentList, setCommentList] = useState([]);
  const updateFunction = (newComment) => {
    newComment = {...newComment, key: key};
    key += 1;
    setCommentList(commentList.concat(newComment));
    console.log(commentList);
  }
  return (
    <>
      <Post />
      <Comment commentList={commentList} authorId={authorId} postId={postId} update={updateFunction} />
    </>
  );
}

export default App;