import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState();

  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const signedInUser = result.user;
        toast.success("Logged in Successfully");
        console.log(signedInUser);
        setUser(signedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
        toast.error("User Logged Out");
      })
      .error((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div>
      <h3>Please Log In</h3>
      {user ? (
        <button onClick={handleGoogleSignOut}> Logout</button>
      ) : (
        <button onClick={handleGoogleSignIn}> Login</button>
      )}

      {user && (
        <div>
          <h2>User : {user.displayName} </h2>
          <p>email :{user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}

      <Toaster></Toaster>
    </div>
  );
};

export default Login;
