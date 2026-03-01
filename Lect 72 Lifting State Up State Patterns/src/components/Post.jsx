import React from "react";

const Post = ({ post }) => {
  let { id, body, title } = post ?? {};

  return post?.id ? (
    <article id={id}>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  ) : (
    <p>No post</p>
  );
};

export default Post;
