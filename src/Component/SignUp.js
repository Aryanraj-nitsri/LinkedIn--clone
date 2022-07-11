import React, { useState } from "react";
import "./SignUp.css";
import LogIn from "./LogIn";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { signIn } from "../features/Userslice";
import { useDispatch } from "react-redux";

function SignUp() {
  const [manageSign, setmanageSign] = useState(false);
  const dispatch = useDispatch();
  const [Fullname, setFullname] = useState("");
  const [email, setemail] = useState("");
  const [profileUrl, setprofileUrl] = useState("");
  const [password, setpassword] = useState("");
  const signUpHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser)

        return user;

        // ...
      })
      .then((user) => {
        updateProfile(user, {
          displayName: Fullname,
          photoURL: profileUrl,
        })
          .then(() => {
            dispatch(
              signIn({
                email: user.email,
                uid: user.uid,
                photoURL: profileUrl,
                displayName: Fullname,
                emailVerified:user.emailVerified
              })
            );
          })
           }).catch((error) => {
            const errorMessage=error.message
            console.log(error.message);
            alert(errorMessage);
          });

  

    setFullname("");
    setemail("");
    setpassword("");
    setprofileUrl("");
  };
  return (
    <div className="login_container">
      <div className="login_header">
        <h1>Linked</h1>
        <img
          src="../../logo.png.png"
          alt="Network error"
        />
      </div>
      {!manageSign ? (
        <LogIn manageSign={manageSign} setmanageSign={setmanageSign} />
      ) : (
        <>
          <div className="login_title">
            <p>Make the most of your professional life</p>
          </div>
          <div className="loginform_container">
            <div className="logIn_form">
              <form action="" className="form_content" onSubmit={signUpHandler}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={Fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Profile Picture Url"
                  value={profileUrl}
                  onChange={(e) => {
                    setprofileUrl(e.target.value);
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
                <button>Join</button>
              </form>
              <div className="logIn_footer">
                <p>Already on LinkedIn?</p>
                <span onClick={() => setmanageSign(false)}>Sign In</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default SignUp;
