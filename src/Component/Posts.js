import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Posts.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
const Posts= forwardRef(({ data },ref) =>{
  const { name, message, photoUrl,description,postUrlDetail} = data;
  return (
    <div className="Post_container" ref={ref}>
      <div className="Post_header">
        <div className="post_title">
          {photoUrl && <Avatar src={photoUrl} />}

          <div className="post_text">
            {name && <h3>{name}</h3>}
             <p className="post_para">{description}</p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      {postUrlDetail &&  (<div className="post_img">
        <img src={postUrlDetail} alt="network error" />
      </div>) }
      
      <div className="post_body">{message && <p>{message}</p>}</div>
     
      <div className="post_footer">
        <div className="post_icon item1">
          <ThumbUpIcon />
          <span>Like</span>
        </div>
        <div className="post_icon item2">
          <CommentRoundedIcon />
          <span>Comment</span>
        </div>
        <div className="post_icon item3">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="post_icon item4">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
})
export default Posts;
