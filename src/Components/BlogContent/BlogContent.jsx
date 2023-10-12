import React from "react";
import { Repo } from "./ListItem";

export const BlogContent = (props) => {
  return (
    <div>
      <h1>Blog</h1>
      <div> 
        {props.posts.map((post)=> <Repo key={post.id} post={post} /> )}
      </div>
    </div>
  );
};
