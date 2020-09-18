import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={
          "https://1.bp.blogspot.com/-TOIPpmI44G8/UAwL0v2RFnI/AAAAAAAAsFs/eJBUQ-iTVRI/s1600/funny+chimp+pictures+(11).jpg"
        }
        message="Wow this actually works"
        timestamp="This is the timestamp"
        username="Jamesrrs.me"
        image="https://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel-full-169.jpg"
      />
      <Post
        profilePic={
          "https://1.bp.blogspot.com/-TOIPpmI44G8/UAwL0v2RFnI/AAAAAAAAsFs/eJBUQ-iTVRI/s1600/funny+chimp+pictures+(11).jpg"
        }
        message="Wow this actually works twice"
        timestamp="This is the timestamp"
        username="second image here"
      />
      <Post
        profilePic={
          "https://1.bp.blogspot.com/-TOIPpmI44G8/UAwL0v2RFnI/AAAAAAAAsFs/eJBUQ-iTVRI/s1600/funny+chimp+pictures+(11).jpg"
        }
        message="Wow this actually works twice"
        timestamp="This is the timestamp"
        username="third image here"
      />
    </div>
  );
}

export default Feed;
