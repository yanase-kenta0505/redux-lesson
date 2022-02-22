import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const getposts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({
        type: "Get_POST_DATA",
        payload: data,
      });
    };
    getposts();
  }, [dispatch]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Post;
