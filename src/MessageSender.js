import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamSharpIcon from "@material-ui/icons/VideocamSharp";
import PhotoLibrarySharpIcon from "@material-ui/icons/PhotoLibrarySharp";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // some db stuff
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamSharpIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrarySharpIcon style={{ color: "green" }} />
          <h3>Photo Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
