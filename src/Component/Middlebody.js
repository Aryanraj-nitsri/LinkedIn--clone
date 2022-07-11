import React from "react";
import { Avatar } from "@mui/material";
import "./Middlebody.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Posts from "./Posts";
import { useState, useEffect } from "react";
import { serverTimestamp } from "firebase/firestore";
import db from "./Firebase";
import { addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore/lite";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import ImageHandler from "./ImageHandler";

function Middlebody() {
  const [image, setimage] = useState(false);
  const [post_detail, setpost_detail] = useState("");
  const [postData, setpostData] = useState([]);
  const [posturl_middle, setposturl_middle] = useState(null);
  const [count, setcount] = useState(0);
  const { displayName, photoURL, postUrlDetail } = useSelector(
    (state) => state.user.user
  );
  const date = new Date();

  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const day = date.getDate();
  const SubmitPost = async (e) => {
    e.preventDefault();
    setcount(count + 1);
    await addDoc(collection(db, "post"), {
      name: displayName,
      message: post_detail,
      photoUrl: photoURL,
      description: `${day} ${month} ${year}`,
      time: serverTimestamp(),
      postUrlDetail: posturl_middle,
    });

    setpost_detail("");
    setposturl_middle(null);
  };

  useEffect(() => {
    const getPost = async () => {
      const q = query(collection(db, "post"), orderBy("time", "desc"));
      const querySnapshot = await getDocs(q);
      setpostData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };
    getPost();
  }, [count]);
  const getPosturl = (url) => {
    setposturl_middle(url);
  };

  return (
    <div className="middle_wrapper">
      <div className="middle_container">
        <div className="middle_input">
          <Avatar src={photoURL} />
          <form action="" className="middle_form" onSubmit={SubmitPost}>
            <input
              type="text"
              placeholder="Start a Post"
              value={post_detail}
              onChange={(e) => {
                setpost_detail(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="middle_icons">
          {!image ? (
            <div className="Icon1 middle_icon" onClick={() => setimage(true)}>
              <InsertPhotoIcon />
              <span>Photo</span>
            </div>
          ) : (
            <ImageHandler
              image={image}
              setimage={setimage}
              getPosturl={(url) => getPosturl(url)}
            />
          )}

          <div className="Icon2 middle_icon">
            <YouTubeIcon />
            <span>Video</span>
          </div>
          <div className="Icon3 middle_icon">
            <TodayIcon />
            <span>Event</span>
          </div>
          <div className="Icon4 middle_icon">
            <AssignmentIcon />
            <span>Write article</span>
          </div>
        </div>
      </div>
      <FlipMove>
        {postData.map((item) => {
          return <Posts key={item.id} data={item.data} />;
        })}
      </FlipMove>
    </div>
  );
}
export default Middlebody;
