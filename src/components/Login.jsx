import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn=() => {
    signInWithPopup(auth,provider)
    .then(result =>{
        const user=result.user
        console.log(user)
    } )
    .catch(error=>{
        console.log("error",error.message)
    })
  }

  return (
    <div>
      <h3>Please Log In</h3>
      <button onClick={handleGoogleSignIn} >Google Login</button>
    </div>
  );
};

export default Login;
