import React from "react";
import { Button } from 'antd';
import  "./Post.css";
const Post = (props) => {
  const onClick =()=>{
    props.post(1)
  }
  return (
    <div class="comp" style={{height:"50px",
    width:"75%"}}>
     <Button type="primary" onClick={onClick}>Post Task</Button>
    </div>
  );
};

export default Post;

