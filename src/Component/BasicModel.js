import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./BasicModel.css";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ forgot, setforgot }) {
  const [email, setemail] = useState("");
  const [error, seterror] = useState(true);
  const [sent, setsent] = useState(true);
  console.log(email);
  const modalSubmit = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, `${email}`)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        seterror(false)
        // ..
      });
setsent(false)
    setemail("");
  };
  return (
    <div>
      <Modal
        open={forgot}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modals_container">
            <div className="modals_heder">
                {sent ?(<>
                
                    <h1>Forgot Password?</h1>
                    <span>Reset password in just one step</span>
                
                
                </>):<h1>
                 { error?("Email has been sent!"):("email is not registerd")}   
                </h1>
                }
            </div>
            <form action="" className="modal_form" onSubmit={modalSubmit}>
              <div className="modals">
                <input
                  type="text"
                  placeholder="Enter your email to reset password"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <button>Reset Password</button>

                <span
                  onClick={() => {
                    setforgot(false);
                  }}
                >
                  
                  Back
                </span>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
