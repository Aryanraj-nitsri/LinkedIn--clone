import React from "react";
import Header from "./Component/Header";
import Leftsidebar from "./Component/Leftsidebar";
import SignUp from "./Component/SignUp";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn, usersignOut } from "./features/Userslice";
import Emailverify from "./Component/Emailverify";

function App() {
  const userCotent = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          signIn({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(usersignOut());
      }
    });
  }, []);
  return (
    <div className="wrapper">
      {!userCotent ? (
        <SignUp />
      ) : (!userCotent.emailVerified?(<Emailverify/>):(
        <>
          <Header />
          <Leftsidebar />
        </>)
      )}
    </div>
  );
}
export default App;
