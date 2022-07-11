import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import "./ImageHandler.css";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "18%",
  left: "45.5%",
  transform: "translate(-50%, -50%)",
  width: 525,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageHandler({ image, setimage, getPosturl }) {
  const [postUrl, setpostUrl] = useState(null);
  const [imagefile, setimagefile] = useState(null);
  const [progresCheck, setprogresCheck] = useState(0);
  const ChangeHandler = (e) => {
    if (e.target.files[0]) setimagefile(e.target.files[0]);
  };
  const uploadHandler = () => {
    const storage = getStorage();
    const storageRef = ref(storage, imagefile.name);

    const uploadTask = uploadBytesResumable(storageRef, imagefile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogresCheck(progress);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setpostUrl(downloadURL);
        });
      }
    );

    setimagefile(null);
  };
  getPosturl(postUrl);

  return (
    <div>
      <Modal
        open={image}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="image_container">
            <div className="image_header">
              <p>Edit Your Photo</p>
              <div className="icon_container" onClick={() => setimage(false)}>
                <CloseSharpIcon />
              </div>
            </div>
            <hr className="image_divider" />
            <div className="image_button">
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={ChangeHandler}
                />
                <Button variant="contained" component="span">
                  Select your photo
                </Button>
              </label>
              {imagefile && <span>{imagefile.name}</span>}
            </div>
            <div className="image_upload">
              <Button
                variant="contained"
                component="span"
                onClick={uploadHandler}
              >
                Upload
              </Button>
            </div>
            <Box sx={{ width: "100%" }} className="progress">
              <LinearProgress variant="determinate" value={progresCheck} />
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
