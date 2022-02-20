import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.count);
  const posts = useSelector((state) => state.posts);
  return (
    <React.Fragment>
      <div>Countコンポーネント:{count}</div>
      <ul>
        {posts.map((post, index) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Count;
