import React from "react";
import "./LogIn.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "../features/Userslice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import BasicModal from "./BasicModel";




function LogIn({ manageSign, setmanageSign }) {
  const [forgot, setforgot] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        dispatch(
          signIn({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            emailVerified:user.emailVerified

          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        console.log(errorCode);
      });
  };
  return (
    <div className="signin_container">
      <div className="sinin_formwrap">
        <div className="sinin_formheader">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <form action="" className="signin_form" onSubmit={HandleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          {!forgot ? (
            <span onClick={() => setforgot(true)}>Forgot password?</span>
          ) : (
            <BasicModal forgot={forgot} setforgot={setforgot} />
          )}
          <button>Sign in</button>
        </form>
      </div>
      <div className="login_footer">
        <p>New to LinkedIn? </p>
        <span onClick={() => setmanageSign(true)}>join now</span>
      </div>
    </div>
  );
}
export default LogIn;
