// 🟢 REPLACED class component with functional (v6 compatible)
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // 🟢 useParams replaces match.params
import { useSelector, useDispatch } from 'react-redux'; // 🟢 useSelector/useDispatch replace connect
import { fetchPost } from '../actions/index';

const PostsShow = () => {
  const { id } = useParams(); // 🟢 get route param
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.find((p) => p.id === parseInt(id, 10))
  );

  useEffect(() => {
    if (!post) {
      dispatch(fetchPost(id)); // 🟢 fetch post if missing
    }
  }, [id, post, dispatch]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <div className="post-item">
        <h3>{post.title}</h3>
  <p>{post.content}</p>
      </div>
      <Link to="/posts">Back</Link>
    </div>
  );
};

export default PostsShow;
